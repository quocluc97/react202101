import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      day: "2/1/2011",
      reminder: false,
    },
    {
      id: 2,
      text: "Food Shopping",
      day: "2/1/2011",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "2/1/2011",
      reminder: false,
    },
  ]);
// Delete Task
const deleteTask = (id) =>{
  console.log(id);
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
