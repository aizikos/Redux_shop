const initialState = {
    product: JSON.parse(localStorage.getItem("product")) || [],
    basket: [],
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let result = [...state.product, action.payload]
            localStorage.setItem("product", JSON.stringify(result))
            return { ...state, product: result };
        case "ADD_TO_BASKET":
            return { ...state, basket: [...state.basket, action.payload] };
        case "INCREMENT_QUANTITY":
            return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? { ...el, quently: el.quently + 1 } : el) }
        case "MINUS_QUANTITY":
            return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? { ...el, quently: el.quently - 1 } : el) }
        case "DELETE":
            return {... state, basket: state.basket.filter((el) => el.id !== action.payload.id)}
        default:
            return state;
    }
}