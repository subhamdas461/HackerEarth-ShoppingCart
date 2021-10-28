import React from "react";
import { data } from "../../data.json";

const Item = () => {
    return data.map((e) => {
        return (
            <tr key={e.id}>
                <td className="main-item-name">
                    <img src={e.img_url} alt="item-img" />
                    <span className="name">{e.name}</span>
                    <span className="delete-btn">
                        <i className="fa fa-trash-alt"></i>
                    </span>
                </td>
                <td>
                    <span className="minus-item">
                        <i className="fa fa-minus"></i>
                    </span>
                    <span className="nos-item">{1}</span>
                    <span className="plus-item">
                        <i className="fa fa-plus"></i>
                    </span>
                </td>
                <td>${e.price}</td>
            </tr>
        );
    });
};

export default Item;
