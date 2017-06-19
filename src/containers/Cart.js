import '../styles/Cart.css';
import React from 'react';
import { connect } from 'react-redux';
import { cartItemDec } from '../actions/cartActions';


export class Cart extends React.Component
{
    render() {
        const {cart} = this.props; console.log("cart props:", this.props);

        return <div className="flex-cart">

            { Object.keys(cart).map(key => {
                const item = cart[key];
                return <div key={item.id} className="cartItem">
                    {item.name + ", "}
                    {item.count + " x "}
                    {item.price + " kr = "}
                    {item.count * item.price + " kr"}
                    <button onClick={() => this.props.cartItemDec(item)}>x</button>
                </div>;
            })}

            { Object.keys(cart).length > 0 && <hr /> }

            <p>Total to pay: {this.getTotalPrice()}</p>

        </div>;
    }

    getTotalPrice() {
        const {cart} = this.props;

        return <span className="cartTotalPrice">
            {Object.keys(cart)
                .reduce((acc, cur) => acc + cart[cur].price * cart[cur].count, 0) + " SEK"}
        </span>;
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        cartItemDec: (item) => {
            dispatch(cartItemDec(item));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
