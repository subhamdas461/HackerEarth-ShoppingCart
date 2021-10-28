import "./App.css";
import Checkout from "./Components/Checkout/Checkout";

import Main from "./Components/ItemColumn/Main";
import DataContext from "./DataContext";

function App() {
    return (
        <DataContext>
            <div id="main-wrapper">
                <Main />
                <Checkout />
            </div>
        </DataContext>
    );
}

export default App;
