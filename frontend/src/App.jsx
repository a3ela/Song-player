// style
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
