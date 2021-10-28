import { createContext, useReducer } from "react";
import { data } from "./data.json";
export const ItemsContext = createContext();

const reducer = (state, { type, id }) => {
    switch (type) {
        case "INCREMENT": {
            let newAddItem = state.data.map((e) => {
                if (e.id === id) {
                    return { ...e, qty: e.qty + 1 };
                }
                return e;
            });
            return { ...state, data: newAddItem };
        }
        case "DECREMENT": {
            let newDecItem = state.data.map((e) => {
                if (e.qty === 1) {
                    return e;
                }
                if (e.id === id) {
                    return { ...e, qty: e.qty - 1 };
                }
                return e;
            });
            return { ...state, data: newDecItem };
        }
        case "ADD_PRICE": {
            let initSum = 0,
                disSum = 0,
                typeDisSum = 0;
            state.data.forEach((e) => {
                initSum += e.price * e.qty;
                disSum += e.discount * e.qty;
                if (e.type === "fiction") {
                    typeDisSum += e.price * 0.15 * e.qty;
                }
            });
            return {
                ...state,
                initialTotal: initSum,
                priceDiscount: disSum,
                typeDiscount: typeDisSum,
                grandTotal: initSum - (disSum + typeDisSum),
            };
        }
        case "DELETE": {
            console.log("DELETE : ", id);
            let newList = state.data.filter((e) => {
                return e.id !== id;
            });
            return { ...state, data: newList };
        }
        default:
            return state;
    }
};
const DataContext = ({ children }) => {
    data.map((e) => {
        return (e["qty"] = 1);
    });

    const initialState = {
        data,
        initialTotal: 0,
        priceDiscount: 0,
        typeDiscount: 0,
        grandTotal: 0,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ItemsContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};

export default DataContext;
