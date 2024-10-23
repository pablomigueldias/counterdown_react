import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="circle1"></div>
      <div className="container">
        <Outlet />
      </div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
