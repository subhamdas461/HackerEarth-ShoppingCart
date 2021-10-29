import { useContext, useEffect } from "react";
import { ItemsContext } from "../../DataContext";
import Item from "./Item";
import Popup from "../Popup";
import Notification from "../Notification";

const Main = () => {
    const { state, dispatch } = useContext(ItemsContext);
    useEffect(() => {
        let t;
        if (state.notify) {
            t = setTimeout(() => {
                dispatch({ type: "NOTIFY", show: false });
            }, 3000);
        }
        if (state.data.length === 0) {
            dispatch({ type: "SHOW_RESET", show: true });
        }
        return () => {
            clearTimeout(t);
        };
        // eslint-disable-next-line
    }, [state.notify]);
    return (
        <div>
            {state.notify && <Notification />}
            {state.popup && <Popup name={"name"} />}
            <h1 className="summary-head">
                <i className="fas fa-chevron-left"></i>
                {" Order Summary"}
            </h1>
            <table>
                <thead>
                    <tr className="thead-row">
                        <th className="th-item">Items ({state.data.length})</th>
                        <th className="th-quantity">Qty</th>
                        <th className="th-price">Price</th>
                    </tr>
                </thead>

                <tbody>
                    <Item />
                </tbody>
            </table>
            {state.showReset && (
                <button id="reset" onClick={() => dispatch({ type: "RESET" })}>
                    Reset Items
                </button>
            )}
        </div>
    );
};

export default Main;
