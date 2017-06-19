
export function cartItemInc(payload)
{
    return {
        type: "CART_INC_ITEM",
        payload
    }
}

export function cartItemDec(payload)
{
    return {
        type: "CART_DEC_ITEM",
        payload
    }
}

export function cartItemRevert(payload) {
    return {
        type: "CART_REVERT_ITEM",
        payload
    }
}