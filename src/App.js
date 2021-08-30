import "./App.css";
import Home from "./Pages/Home";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Employee from "./Pages/Employee";
import Payroll from "./Pages/Payroll";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="emp-container">
        <Navbar />
        <div>
          <Header />
        </div>

        <div>
          <Switch>
            <Route path="/employee">
              <Employee />
            </Route>
            <Route path="/payroll">
              <Payroll />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;