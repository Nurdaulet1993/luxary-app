import React, {Component} from 'react';

export default class GoodsItem extends Component {
    render() {
        const {img, ...properties} = this.props.properties;
        const {side} = this.props;
        const elements = (side === 'left') 
                            ?   [
                                    <React.Fragment key="1">
                                        <ElementImg  img={img}/> <ElementDesc  properties={properties}/>
                                    </React.Fragment>
                                ] 
                            :   [
                                    <React.Fragment  key="2">
                                        <ElementDesc properties={properties}/><ElementImg img={img}/>
                                    </React.Fragment> 
                                ];

        return(
            <div className="good wow slideInRight" data-wow-delay="0.7s">
                {elements}
            </div>
        )
    }
}

const ElementImg = ({img}) => {
    return(
        <div className="good__view">
            <img src={img} alt="product" className="good__image"/>
        </div>
    ); 
}

const ElementDesc = ({properties}) => {
    return(
        <div className="good__desc">
            <h4 className="good__heading">{properties.title}</h4>
            <p className="good__text">
                {properties.description}
            </p>

            <div className="btn-group">
                <span className="btn-call more-info">Подробнее</span>
                <span className="btn-call">Заказать</span>
            </div>
        </div>
    )
}
