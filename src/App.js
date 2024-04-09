import "./App.scss";
import Lexend from "./components/atoms/Lexend";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <p>Components</p>
        <Lexend text="Lexend" />
      </div>
    </div>
  );
}

export default App;
