import React from "react";

const Checkout = () => {
    return (
        <div className="checkout-box">
            <h3>Total</h3>
            <div className="ch-items">
                <p>Items(7): </p>
                <p className="ch-item-amount">$138</p>
            </div>
            <div className="ch-items">
                <p>Discount: </p>
                <p className="ch-item-amount">$138</p>
            </div>
            <div className="ch-items">
                <p>Type discount: </p>
                <p className="ch-item-amount">$138</p>
            </div>
            <div className="ch-total">
                <p>Order Total</p>
                <p className="total-amount">$125.00</p>
            </div>
        </div>
    );
};

export default Checkout;
