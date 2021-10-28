import { useContext } from "react";

import { ItemsContext } from "../../DataContext";

const Item = () => {
    const { state, dispatch } = useContext(ItemsContext);

    return state.data.map((e) => {
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
                    <span
                        className="minus-item"
                        onClick={() =>
                            dispatch({ type: "DECREMENT", id: e.id })
                        }
                    >
                        <i className="fa fa-minus"></i>
                    </span>
                    <span className="nos-item">{e.qty}</span>
                    <span
                        className="plus-item"
                        onClick={() =>
                            dispatch({ type: "INCREMENT", id: e.id })
                        }
                    >
                        <i className="fa fa-plus"></i>
                    </span>
                </td>
                <td>${e.price}</td>
            </tr>
        );
    });
};

export default Item;
