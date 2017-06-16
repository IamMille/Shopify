import './History.css';
import React from 'react';

import { connect } from 'react-redux';
import { appShopAdd, appShopRemove } from '../actions/shopActions';
import { cartItemInc, cartItemDec } from '../actions/cartActions';

class History extends React.Component
{
    render() {
        const {app} = this.props;

        return <div>
            <p>History actions:</p>
            <div className="history">
            {app.history.map( (e,i) =>
                <p key={i}>
                    {e.type} : {JSON.stringify(e.payload) + " "}
                    <button onClick={() => this.handleRevert(e)}>Revert</button>
                </p>
            )}
            </div>
        </div>;
    }

    handleRevert = (oldItem) =>
    {
        const {type, payload} = oldItem;

        switch(type) {
            case 'SHOP_ADD_ITEM':
                this.props.appProductRemove(payload); break;

            case 'SHOP_REMOVE_ITEM':
                this.props.appProductAdd(payload); break;

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
        appProductAdd: (payload) => {
            dispatch(appShopAdd(payload))
        },
        appProductRemove: (payload) => {
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