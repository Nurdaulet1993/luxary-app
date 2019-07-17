import React, {Component} from 'react';
import './App.css';

import Service from '../../services';

import Header from '../header';
import Hero  from '../hero';
import Goods from '../goods';
import Advantages from '../advantages';
import Testimonials from '../testimonials';


export default class App extends Component {
    state = {
        goods: [],
        testimonials: []
    }

    service = new Service();

    componentDidMount() {
        this.service.getGoods('all')
                    .then(body => {
                        this.setState({
                            goods: body
                        })
                    });
    }

    render() {
        
        return(
            <React.Fragment>
                <Header/>
                <Hero/>
                <Goods goods={this.state.goods}/>
                <Advantages/>
                <Testimonials/>
            </React.Fragment>     
        );
    }
}

