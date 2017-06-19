import '../styles/Admin.css';
import React from 'react';

import { connect } from 'react-redux';
import { appShopAdd, appShopRemove } from '../actions/shopActions';

class Admin extends React.Component
{
    constructor() {
        super(...arguments);
        this.state = this.getInitialState();
    }

    getInitialState = () => {
        return {
            id: '', name: '', price: '',
            photo: 'https://unsplash.it/170/170?random&' + ~~(Math.random()*99999)
        };
    };

    render() {
        const {shop} = this.props;

        return <div>

            <fieldset>
                <legend>
                    {this.state.id ? "Edit product" : "Add Product"}
                </legend>

                <input type="text"
                       placeholder="Name"
                       value={this.state.name}
                       onChange={this.handleChange} />

                <input type="text"
                       placeholder="Price"
                       value={this.state.price}
                       onChange={this.handleChange} /><br />

                <input type="text"
                       placeholder="Photo"
                       value={this.state.photo}
                       onChange={this.handleChange} /><br />

                <button onClick={this.handleSubmit}>Submit</button>

            </fieldset>

            <div className="flex-shop">
                {Object.keys(shop).map(key => {
                    const item = shop[key];
                    return <div key={item.id} className="item">
                        <img src={item.photo} alt=''/>
                        <div>
                            {item.name}, {item.price + " kr/st "}
                            <button onClick={() => this.handleEdit(item)}>Edit</button>
                        </div>
                    </div>
                })}
            </div>


        </div>;
    }

    getNextId = () => {
        const {shop} = this.props;
        let keys = Object.keys(shop);
        let lastKeyId = keys[keys.length - 1];
        return Number(lastKeyId) + 1;
    };

    handleEdit = (item) => {
        //TODO: if (this.state.id) - you have unsaved changes, abort
        this.setState({...item});
        this.props.appShopRemove({...item});
    };

    handleChange = (e) => {
        this.setState({
            [e.target.placeholder.toLowerCase()]: e.target.value
        });
    };

    handleSubmit = (e) => {
        const {id, name, price} = this.state;
        if (!(name && price)) return; // TODO: cleanup

        this.props.appShopAdd({
            ...this.state,
            id: id || this.getNextId(),
            price: Number(price),
            count: 0
        });

        this.setState(this.getInitialState());
    };
}


const mapStateToProps = (state) =>
{
    return {
        app: state.app,
        shop: state.shop
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);