import "./App.css";
import AddTasks from "./components/AddTasks";
import ListTasks from "./components/ListTasks";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Edit from "./components/Edit";
function App() {
  const tasks = useSelector((state) => state.taskReducer.tasks);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <AddTasks />
          <ListTasks />
        </Route>
        <Route
          path="/editTask/:id"
          render={(props) => <Edit {...props} tasks={tasks} />}
        />
      </Switch>
    </div>
  );
}

export default App;
