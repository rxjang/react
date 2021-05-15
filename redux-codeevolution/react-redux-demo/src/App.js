import "./App.css";
import CakeContainer from "./components/CakeConainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamConatiner from "./components/IceCreamConatiner";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamConatiner />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
