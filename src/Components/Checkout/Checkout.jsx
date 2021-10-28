import { useContext, useEffect } from "react";
import { ItemsContext } from "../../DataContext";

const Checkout = () => {
    const { state, dispatch } = useContext(ItemsContext);
    const { data, initialTotal, priceDiscount, typeDiscount, grandTotal } =
        state;
    useEffect(() => {
        dispatch({ type: "ADD_PRICE" });
    }, [data]);

    return (
        <div className="checkout-box">
            <h3 className="total-text">Total</h3>
            <div className="ch-items ">
                <p>Items ({state.data.length}) : </p>
                <p className="ch-item-amount">$ {initialTotal.toFixed(2)}</p>
            </div>
            <div className="ch-items-dis">
                <p>Discount : </p>
                <p className="ch-item-amount">-$ {priceDiscount.toFixed(2)}</p>
            </div>
            <div className="ch-items-typ-dis">
                <p>Type discount : </p>
                <p className="ch-item-amount">-$ {typeDiscount.toFixed(2)}</p>
            </div>
            <div className="ch-total">
                <p>Order Total</p>
                <p className="total-amount">$ {grandTotal.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Checkout;
