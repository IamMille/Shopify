import '../styles/History.css';
import React from 'react';

import { connect } from 'react-redux';
import { appShopAdd, appShopRemove } from '../actions/shopActions';
import { cartItemInc, cartItemDec } from '../actions/cartActions';

class History extends React.Component
{
    render() {
        const {app} = this.props;

        return <div className="history">

            <p className="historyHeader">
                {app.history.length > 0 ? "History actions" : "(Empty)" }
            </p>

            { app.history.map( (e,i) =>
                <p key={i}>
                    {e.type} : {JSON.stringify(e.payload) + " "}
                    <button onClick={() => this.handleRevert(e)}>Revert</button>
                </p>
            )}

        </div>;
    }

    handleRevert = (oldItem) =>
    {
        const {type, payload} = oldItem;

        switch(type) {
            case 'SHOP_ADD_ITEM':
                this.props.appShopRemove(payload); break;

            case 'SHOP_REMOVE_ITEM':
                this.props.appShopAdd(payload); break;

            case 'CART_INC_ITEM':
                this.props.cartItemDec(payload); break;

            case 'CART_DEC_ITEM':
                this.props.cartItemInc(payload); break;

            default:
        }
    }
}

const mapStateToProps = (state) =>
{
    return {
        app: state.app
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        appShopAdd: (payload) => {
            dispatch(appShopAdd(payload))
        },
        appShopRemove: (payload) => {
            dispatch(appShopRemove(payload))
        },
        cartItemInc: (payload) => {
            dispatch(cartItemInc(payload));
        },
        cartItemDec: (payload) => {
            dispatch(cartItemDec(payload))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(History);