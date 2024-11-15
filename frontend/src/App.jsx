// style
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
}

export default App;
