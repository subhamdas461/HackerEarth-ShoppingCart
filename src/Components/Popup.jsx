import React, { useContext } from "react";
import { ItemsContext } from "../DataContext";

const Popup = () => {
    const { state, dispatch } = useContext(ItemsContext);
    return (
        <>
            <div className="overlay"></div>
            <div id="popup">
                <p>
                    Do you want to remove <b>{state.deleteName}</b>?
                </p>
                <div className="popup-btns">
                    <button
                        onClick={() => {
                            dispatch({ type: "DELETE", id: state.deleteId });
                            dispatch({ type: "NOTIFY", show: true });
                        }}
                    >
                        Yes
                    </button>
                    <button
                        onClick={() =>
                            dispatch({
                                type: "POPUP",
                                payload: {
                                    show: false,
                                    deleteId: null,
                                    deleteName: null,
                                },
                            })
                        }
                    >
                        No
                    </button>
                </div>
            </div>
        </>
    );
};

export default Popup;
