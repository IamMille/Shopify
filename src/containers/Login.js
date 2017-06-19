import '../styles/Login.css';
import React from 'react';

import { connect } from 'react-redux';
import { appUserLogin, appUserLogout } from '../actions/appActions';

import Admin from './Admin';


class Login extends React.Component
{
    constructor() {
        super(...arguments);
        this.state = { usr: '',  pwd: '' };
    }

    render() {
        const {app} = this.props;

        return <div className="flex-login">

            { !app.isLoggedIn &&
                <fieldset>
                    <legend>Enter your credentials: </legend>

                    <input type="text" name="usr"
                           placeholder="Username"
                           value={this.state.usr}
                           onChange={this.handleChange} />

                    <input type="password" name="pwd"
                           placeholder="Password"
                           value={this.state.pwd}
                           onChange={this.handleChange} />

                    <button onClick={this.handleLogin}>Login</button>
                </fieldset>
            }

            { app.isLoggedIn === false &&
                <div>
                    <p className="failed">Wrong username or password!</p>
                </div>
            }

            { app.isLoggedIn === true &&
                <div>
                    <p>
                        Welcome {app.username + "! "}
                        <button onClick={this.handleLogout}>Logout</button>
                    </p>
                    <Admin />
                </div>
            }

        </div>
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name.toLowerCase()]: e.target.value
        });
    };

    handleLogin = (e) => {
        this.props.appUserLogin({...this.state});
    };

    handleLogout = (e) => {
        this.props.appUserLogout();
    }
}


const mapStateToProps = (state) =>
{
    return {
        app: state.app,
    }
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        appUserLogin: (object) => {
            dispatch(appUserLogin(object));
        },
        appUserLogout: () => {
            dispatch(appUserLogout());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);