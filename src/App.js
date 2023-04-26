import Home from "./components/Home/home";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <div className="sticky-top">
      <Navbar />
      </div>
      <Home />
    </div>
  );
}

export default App;
