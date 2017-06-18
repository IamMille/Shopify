
const cartReducer = (state =
{

},
 action) =>
{
    let itemId, item;

    switch (true)
    {
        case /CART_/.test(action.type):
            itemId = action.payload.id;
            state = {
                [itemId]: { ...action.payload, count:0 }, // if new item
                ...state
            };
            item = state[itemId];
            console.log("cartReducer:", item);
            break;

        default:
            state = { ...state };
    }

    switch (action.type)
    {
        case 'CART_INC_ITEM':
            item.count += 1;
            item.count = action.payload.count;
            break;

        case 'CART_DEC_ITEM':
            if (item.count > 0) item.count -= 1;
            else item.count = action.payload.count;
            if (item.count === 0) delete state[itemId];
            break;

        default:
    }

    return state;
};

export default cartReducer;
