import About from "./component/about";
import Inform from "./component/headerinformation";

// eslint-disable-next-line
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Inform />

      <About />
    </div>
  );
}

export default App;
