
const shopReducer = (state =
{
    1: {
        id: 1,
        name: 'Tomat',
        price: 5,
        photo: 'https://lorempixel.com/170/170/food/1',
        count: 0
    },
    2: {
        id: 2,
        name: 'Gurka',
        price: 10,
        photo: 'https://lorempixel.com/170/170/food/2',
        count: 0
    },
    3: {
        id: 3,
        name: 'Apelsin',
        price: 4,
        photo: 'https://lorempixel.com/170/170/food/3',
        count: 0
    },
    4: {
        id: 4,
        name: 'Kiwi',
        price: 6,
        photo: 'https://lorempixel.com/170/170/food/4',
        count: 0
    },
    6: {
        id: 6,
        name: 'Morot',
        price: 2,
        photo: 'https://lorempixel.com/170/170/food/6',
        count: 0
    }
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
            break;

        default:
            state = { ...state };
    }

    switch (action.type)
    {
        case 'CART_INC_ITEM':
            state[itemId].count += 1;
            item.count = action.payload.count;
            break;

        case 'CART_DEC_ITEM':
            if (item.count > 0) item.count -= 1;
            else item.count = action.payload.count;
            break;

        case 'SHOP_ADD_ITEM':
            state[action.payload.id] = {...action.payload};
            break;

        case 'SHOP_REMOVE_ITEM':
            delete state[action.payload.id];
            break;

        default:
    }

    return state;
};

export default shopReducer;