const initialState = {
    product: JSON.parse(localStorage.getItem("product")) || [],
    basket: JSON.parse(localStorage.getItem('basket')) || [],
    favorite: [],
}


export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            let result = [...state.product, action.payload]
            localStorage.setItem("product", JSON.stringify(result))
            return { ...state, product: result };
        case "ADD_TO_BASKET":
            let find_basket = state.basket.find((el) => el.id === action.payload.id )
            let res = state.basket.map((el) => el.id === action.payload.id ?{...el, quently: el.quently + 1}: el)
            localStorage.setItem("basket", JSON.stringify(res))
            if(find_basket){
                return {...state, basket: res}
            }else{
                return {...state, basket: [...state.basket, action.payload]}
            }            
        case "INCREMENT_QUANTITY":
            return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? { ...el, quently: el.quently + 1 } : el) }
        case "MINUS_QUANTITY":
            return { ...state, basket: state.basket.map((el) => el.id === action.payload.id ? 
                { ...el, quently: el.quently > 1 ? el.quently - 1: 1 } : el) }
        case "DELETE":
            return {... state, basket: state.basket.filter((el) => el.id !== action.payload.id)}
            case 'ADD_TO_FAVORITE':
                return {...state, favorite: [...state.favorite, action.payload]}
        default:
            return state;
    }
}