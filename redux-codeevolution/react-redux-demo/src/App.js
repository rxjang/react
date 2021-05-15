import "./App.css";
import CakeContainer from "./components/CakeConainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamConatiner from "./components/IceCreamConatiner";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamConatiner />
      </div>
    </Provider>
  );
}

export default App;
