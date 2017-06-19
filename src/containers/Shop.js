import '../styles/Shop.css';
import React from 'react';
import { connect } from 'react-redux';
import { cartItemInc, cartItemDec } from '../actions/cartActions';


export class Shop extends React.Component
{
    render() {
        const {shop} = this.props;

        return <div className="flex-shop">

            {Object.keys(shop).map(key => {
                const item = shop[key];
                return <div key={item.id} className="item">
                    <img src={item.photo} alt=''/>
                    <div>{item.name}, {item.price + " kr/st"}</div>
                    <div>
                        <button onClick={() => this.props.cartItemInc(item)}>+</button> {item.count || 0} {""}
                        <button onClick={() => this.props.cartItemDec(item)}>-</button>
                    </div>
                </div>
            })}

        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        shop: state.shop
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartItemInc: (item) => {
            dispatch(cartItemInc(item))
        },
        cartItemDec: (item) => {
            dispatch(cartItemDec(item))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
