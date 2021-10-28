import React from "react";
import { data } from "../../data.json";
import Item from "./Item";
const Main = () => {
    return (
        <div>
            <h1 className="summary-head">
                <i className="fas fa-chevron-left"></i>
                {" Order Summary"}
            </h1>
            <table>
                <thead>
                    <tr className="thead-row">
                        <th className="th-item">Items({data.length})</th>
                        <th className="th-quantity">Qty</th>
                        <th className="th-price">Price</th>
                    </tr>
                </thead>

                <tbody>
                    <Item />
                </tbody>
            </table>
        </div>
    );
};

export default Main;