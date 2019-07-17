import React, {Component} from 'react';
import './Goods.css';
import Service from '../../services';

import GoodsItem from './goods-item';


export default class Goods extends Component {

    render() {
        
        const {goods} = this.props;

        
        const elements = goods.map((item, i) => {
            const {id, ...properties} = item;
            const side = (i % 2 === 0) ? 'left' : 'right';

            return(
                <React.Fragment key={id}>
                    <GoodsItem properties={properties} side={side}/>
                </React.Fragment>
            );
        })
        
        
        
        return(
            <section id="goods-info" className="goods-info">
                <div className="container">
                    <div className="title">
                        <h4 className="title__heading wow fadeInDown" data-wow-delay="0.2s">О продуктах</h4>
                    </div>

                    <div className="goods-info__content">
                        {elements}
                    </div>
                </div>

                <img src="./assets/img/tube-left.png" alt="tube" className="tube-left wow slideInLeft"/>
                <img src="./assets/img/tube-right.png" alt="tube" className="tube-right wow slideInRight"/>
            </section>
        );
    };
};

