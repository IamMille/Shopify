import './Shop.css';
import React from 'react';
import { connect } from 'react-redux';
import { cartItemInc, cartItemDec } from '../actions/cartActions'; // to edit items in cart


export class Shop extends React.Component
{
    render() {
        const {shop, app} = this.props;

        return (
            <div className="flex-shop">
                {Object.keys(shop).map(key => {
                    const item = shop[key];
                    return <div key={item.id} className="item">
                        <img src={item.photo} alt=''/>
                        <div>
                            {item.name}, {item.price + " kr/st "}
                            { "Login" === app.location ? <button>Edit</button> : "" }
                        </div>

                        { "Login" === app.location ? "" :
                            <div>
                                <button onClick={() => this.props.cartItemInc(item)}>
                                +</button> {item.count || 0} <button onClick={() => this.props.cartItemDec(item)}>-</button>
                            </div>
                        }

                    </div>
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        shop: state.shop,
        app: state.app
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
