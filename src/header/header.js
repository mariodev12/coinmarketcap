import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import numeral from 'numeral'

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true,
          total: null,
          tuenti: null,
          dominance: null
        };
      }

      componentWillMount() {
          fetch('https://api.coinmarketcap.com/v1/global/')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    total: data.total_market_cap_usd,
                    tuenti: data.total_24h_volume_usd,
                    dominance: data.bitcoin_percentage_of_market_cap
                })
            })
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
      render() {
        return (
            <div className="header blue shadow-bottom">
                <Navbar color="faded" light expand="md">
                <NavbarBrand className="bolder" href="/">Coin Market Cap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink><span className="bold">Market Cap:</span> <span>{this.state.total ? numeral(this.state.total).format('$0,0.00') : null}</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><span className="bold">24h Vol:</span> <span>{this.state.tuenti ? numeral(this.state.tuenti).format('$0,0.00') : null}</span></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><span className="bold">BTC Dominance:</span> <span>{this.state.dominance ? numeral(this.state.dominance).format('0.00')+'%' : null}</span></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
          </div>
        );
      }
}

export default Header;