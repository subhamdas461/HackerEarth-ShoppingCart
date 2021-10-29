import { createContext, useReducer, useEffect } from "react";
import { data } from "./data.json";
export const ItemsContext = createContext();

const reducer = (state, { type, id, payload, show }) => {
    switch (type) {
        case "INCREMENT": {
            let newAddItem = state.data.map((e) => {
                if (e.id === id) {
                    return { ...e, qty: e.qty + 1 };
                }
                return e;
            });
            let newState = { ...state, data: newAddItem };
            localStorage.state = JSON.stringify(newState);
            return newState;
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
            let newState = { ...state, data: newDecItem };
            localStorage.state = JSON.stringify(newState);
            return newState;
        }
        case "ADD_PRICE": {
            let initSum = 0,
                disSum = 0,
                typeDisSum = 0;
            state.data.forEach((e) => {
                initSum += e.price * e.qty;
                disSum += e.discount * (e.price / 100) * e.qty;
                if (e.type === "fiction") {
                    typeDisSum += e.price * 0.15 * e.qty;
                }
            });
            let newState = {
                ...state,
                initialTotal: initSum,
                priceDiscount: disSum,
                typeDiscount: typeDisSum,
                grandTotal: initSum - (disSum + typeDisSum),
            };
            localStorage.state = JSON.stringify(newState);
            return newState;
        }
        case "POPUP": {
            let newState = {
                ...state,
                popup: payload.show,
                deleteId: payload.id,
                deleteName: payload.name,
            };
            localStorage.state = JSON.stringify(newState);
            return newState;
        }
        case "DELETE": {
            let newList = state.data.filter((e) => {
                return e.id !== id;
            });
            let newState = { ...state, data: newList, popup: false };
            localStorage.state = JSON.stringify(newState);
            return newState;
        }
        case "NOTIFY": {
            let newState = { ...state, notify: show };
            localStorage.state = JSON.stringify(newState);
            return newState;
        }
        case "SHOW_RESET": {
            let newState = { ...state, showReset: show };
            localStorage.state = JSON.stringify(newState);
            return newState;
        }
        case "RESET": {
            return initialState;
        }
        default:
            return state;
    }
};
data.map((e) => {
    return (e["qty"] = 1);
});

let initialState = {
    data,
    initialTotal: 0,
    priceDiscount: 0,
    typeDiscount: 0,
    grandTotal: 0,
    popup: false,
    deleteId: null,
    deleteName: null,
    notify: false,
    showReset: false,
};

const DataContext = ({ children }) => {
    // This useffect will avoid the notification to be shown when the page is reloaded
    useEffect(() => {
        dispatch({ type: "NOTIFY", show: false });
    }, []);

    // Central state for the whole application.
    const [state, dispatch] = useReducer(
        reducer,
        localStorage.state !== undefined
            ? JSON.parse(localStorage.state)
            : initialState
    );

    return (
        <ItemsContext.Provider value={{ state, dispatch }}>
            {children}
        </ItemsContext.Provider>
    );
};
export default DataContext;
