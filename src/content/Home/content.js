import React, {Component} from 'react';
import {Table} from 'reactstrap';
import axios from 'axios';
import {Link} from  'react-router-dom'
import numeral from 'numeral'

require('./content.css');

class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: null,
            id: null,
        }
    }
    componentWillMount() {
        var that = this;
        axios.all([
            axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=100'),
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

    convertSpace = (string) => {
        return string.split(' ').join('-')
    }

    renderRow(){
        return this.state.data.map((item, k) => {
            return (
                    <tr key={k}>
                        <th scope="row">{item.rank}</th>
                        <td>
                            <img alt={this.state.id[item.name]} src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${this.state.id[item.name]}.png`} />
                            <Link key={k} to={`/${this.state.id[item.name]}/${this.convertSpace(item.name)}`}>{item.name}</Link>
                        </td>
                        <td className="rightText">{numeral(item.market_cap_usd).format('$0,0[.]00')}</td>
                        <td className="rightText">{numeral(item.price_usd).format('$0,0[.]00')}</td>
                        <td className="rightText">{numeral(item['24h_volume_usd']).format('$0,0[.]00')}</td>
                        <td className="rightText">{numeral(item.available_supply).format('0,0.0000')} {item.symbol}</td>
                        <td className="rightText">{item.percent_change_24h}</td>
                    </tr>
            )
        })
    }
    render(){
        return (
            <div className="container-home">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th className="rightText">Market Cap</th>
                            <th className="rightText">Price</th>
                            <th className="rightText">Volume (24h)</th>
                            <th className="rightText">Circulating Supply</th>
                            <th className="rightText">Change (24h)</th>
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