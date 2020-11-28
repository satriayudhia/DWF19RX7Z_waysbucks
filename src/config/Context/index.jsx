import React, {createContext, useReducer} from 'react'

export const AppContext = createContext()

const initialState = {
    isLogin: true,
    idUser: [],
    carts: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLogin: true,
                idUser: action.uid
            }
        case "LOGOUT":
            return {
                ...state,
                isLogin: false
            }
        case "ADD_CART":
            const filterExistProductContext = state.carts.filter((product) => product.id === action.payload.id)

            if(filterExistProductContext.length > 0) {
                return {
                    ...state,
                    carts: state.carts.map((product) =>
                        product.id === action.payload.id
                            ? {
                                ...product,
                                qty: product.qty + 1
                            }
                            : product
                    )
                }
            }

            return {
                ...state,
                carts: [
                    ...state.carts,
                    {
                        ...action.payload,
                        qty: 1
                    }
                ]
            }
        default: throw new Error()
    }
}

export const Context = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}

