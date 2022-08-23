import "./App.css";
import Headers from "./components/Headers/Headers";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";
import TinderCards from "./components/TinderCards/TinderCards";

function App() {
  return (
    // BEM class naming convension
    <div className="app">
      {/* Headers */}
      <Headers />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
