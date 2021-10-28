import { useContext, useEffect } from "react";
import { ItemsContext } from "../../DataContext";

const Checkout = () => {
    const { state } = useContext(ItemsContext);

    return (
        <div className="checkout-box">
            <h3 className="total-text">Total</h3>
            <div className="ch-items ">
                <p>Items ({state.data.length}) : </p>
                <p className="ch-item-amount">
                    ${state.initialTotal.toFixed(2)}
                </p>
            </div>
            <div className="ch-items-dis">
                <p>Discount : </p>
                <p className="ch-item-amount">$ {state.disPrice}</p>
            </div>
            <div className="ch-items-typ-dis">
                <p>Type discount : </p>
                <p className="ch-item-amount">${state.typeDisPrice}</p>
            </div>
            <div className="ch-total">
                <p>Order Total</p>
                <p className="total-amount">${state.grandTotal}</p>
            </div>
        </div>
    );
};

export default Checkout;
