
export function appShopAdd(payload) {
    return {
        type: "SHOP_ADD_ITEM",
        payload: payload
    }
}

export function appShopRemove(payload) {
    return {
        type: "SHOP_REMOVE_ITEM",
        payload: payload
    }
}