
const appReducer = (state =
{
    location: "Shop", // landing page
    history: [],
},
 action) =>
{
    state = { ...state };

    switch (action.type)
    {
        case 'VIEW_CHANGE':
            state.location = action.payload.location;
            break;

        case 'USER_LOGIN':
            const {usr, pwd} = action.payload;

            if (usr.length > 0 && pwd.length > 0) { // verify correct credentials
                state.username = usr;
                state.isLoggedIn = true;
            }
            else {
                state.isLoggedIn = false;
            }
            break;

        case 'USER_LOGOUT':
            state.isLoggedIn = null;
            delete state.username;
            break;

        case 'HISTORY_ADD':
            state.history = [{...action.payload}, ...state.history]; // payload = the actual event
            break;

        default:
    }

    return state;
};

export default appReducer;