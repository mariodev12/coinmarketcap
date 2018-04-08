import React, {Component} from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class PaginationCustom extends Component {
    constructor(props){
        super(props)

        this.state = {
            pags: Math.ceil(1596 / 100)
        }
    }
    renderPagination = () => {
        var array = [];
        for (let i = 1; i <= this.state.pags; i++) {
            array.push(<PaginationItem key={i}>
                <PaginationLink tag={Link} to={`/${i * 100}`} href="#">
                    {i}
                </PaginationLink>
            </PaginationItem>)
        }
        return array
    }
    render(){
        console.log(this.state.pags)
        return (
            <Pagination>
                {this.renderPagination()}
            </Pagination>
        )
    }
}

export default PaginationCustom;