import "./App.css";
import Header from "./components/header/header";
import Home from "./pages/home/home";

function App() {
  return (
    <div className="bg-[#1B1B1B] w-screen outfit-font py-20">
      <Header />
      <Home />
    </div>
  );
}

export default App;
