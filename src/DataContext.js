import { createContext, useReducer } from "react";
import { data } from "./data.json";
export const ItemsContext = createContext();

const reducer = (state, { type, id }) => {
    switch (type) {
        case "INCREMENT": {
            let newAddItem = state.data.map((e) => {
                if (e.id === id) {
                    return { ...e, qty: e.qty + 1 };
                } else {
                    return e;
                }
            });
            return { ...state, data: newAddItem };
        }
        case "DECREMENT": {
            let newDecItem = state.data.map((e) => {
                if (e.id === id) {
                    return { ...e, qty: e.qty - 1 };
                }
                return e;
            });
            return { ...state, data: newDecItem };
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
        disPrice: 0,
        typeDisPrice: 0,
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
