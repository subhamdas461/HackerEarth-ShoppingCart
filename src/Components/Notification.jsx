import React, { useContext } from "react";
import { ItemsContext } from "../DataContext";

const Notification = () => {
    const { state } = useContext(ItemsContext);
    return (
        <div id="notification">
            <p>{state.deleteName} is removed!</p>
        </div>
    );
};

export default Notification;
