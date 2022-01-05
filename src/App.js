import "./App.css";
import CurrencySelector from "./components/CurrencySelector";
import CurrencyColumn from "./components/CurrencyColumn";

function App() {
  return (
    <div className="container">
      <h1> Currency Converter </h1>
      <CurrencySelector />
    </div>
  );
}

export default App;
