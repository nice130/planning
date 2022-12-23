import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import Home from "../routes/Home";
import NewPlan from "../routes/NewPlan";
import Planning from "../routes/Planning";
import SideBar from "./SideBar";
function App({savePlan,setSavePlan,mainSize,setMainSize}) {
  return (
    <Router>
      <SideBar mainSize={mainSize} setMainSize={setMainSize}/>
      <Switch>
        <Route path="/plan">
          <NewPlan />
        </Route>
        <Route path="/planning" mainSize={mainSize} setMainSize={setMainSize}>
          <Planning />
        </Route>
        <Route path="/" mainSize={mainSize} setMainSize={setMainSize}>
          <Home />
        </Route>
      </Switch>
      <Redirect from="*" to="/" />
    </Router>
  )
}

export default App;
