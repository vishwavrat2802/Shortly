import './App.css';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Body from "./components/Body.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Body/>
    </div>
  );
}

export default App;
