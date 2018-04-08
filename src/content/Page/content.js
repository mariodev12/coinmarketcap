import React, {Component} from 'react';
import {Table} from 'reactstrap';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom'

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            id: null,
            page: this.props.match.params.page == '100' ? this.props.match.params.page - 100 : '100'
        }
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.page !== nextProps.match.params.page) {
            console.log(nextProps.match.params.page, nextProps)
            var that = this;
            axios.all([
                axios.get(`https://api.coinmarketcap.com/v1/ticker/?start=${nextProps.match.params.page - 100}&limit=100`),
                axios.get('https://s2.coinmarketcap.com/generated/search/quick_search.json')
            ])
            .then(axios.spread(function (data, list) {
                var result = list.data.reduce(function(obj,item){
                    obj[item.name] = item.id; 
                    return obj;
                    }, {});
                that.setState({
                    data: data.data,
                    id: result
                })
            }))
            .catch(error => console.log(error));

        }
    }
    componentWillMount() {
        var that = this;
            axios.all([
                axios.get(`https://api.coinmarketcap.com/v1/ticker/?start=${this.props.match.params.page - 100}&limit=100`),
                axios.get('https://s2.coinmarketcap.com/generated/search/quick_search.json')
            ])
            .then(axios.spread(function (data, list) {
                var result = list.data.reduce(function(obj,item){
                    obj[item.name] = item.id; 
                    return obj;
                    }, {});
                that.setState({
                    data: data.data,
                    id: result
                })
            }))
            .catch(error => console.log(error));
    }

    renderRow(){
        return this.state.data.map((item, k) => {
            return (
                <tr key={k}>
                    <th scope="row">{item.rank}</th>
                    <td>
                        <img alt={this.state.id[item.name]} src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${this.state.id[item.name]}.png`} />
                        <Link key={k} to={`/${this.state.id[item.name]}/${item.name}`}>{item.name}</Link>
                    </td>
                    <td>{item.market_cap_usd}</td>
                    <td>{item.price_usd}</td>
                    <td>{item['24h_volume_usd']}</td>
                    <td>{item.available_supply}</td>
                    <td>{item.percent_change_24h}</td>
                </tr>
            )
        })
    }
    render(){
        console.log(this.props)
        return (
            <div className="container-fluid">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Market Cap</th>
                            <th>Price</th>
                            <th>Volume (24h)</th>
                            <th>Circulating Supply</th>
                            <th>Change (24h)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data ? this.renderRow() : null}
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Content;