import { useState } from "react";
import AddTaskModal from "./AddTaskModal.jsx";
import SearchBox from "./SearchBox.jsx";
import TaskActions from "./TaskActions.jsx";
import TaskList from "./TaskList.jsx";

function TaskBoard() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "Learning React",
    description: "This is description of learning react",
    tags: ["javascript", "html", "css"],
    priority: "High",
    isFav: true,
  };

  const [tasks, setTasks] = useState([defaultTask]);

  const [showModal, setShowModal] = useState(false);

  function handleAddTask(task) {
    // Always assign a new unique id to the task before adding
    const newTask = { ...task, id: crypto.randomUUID() };
    setTasks([...tasks, newTask]);
    setShowModal(false);
    console.log(newTask);
  }

  return (
    <div>
      {" "}
      <section className="mb-20 p-20" id="tasks">
        {showModal && <AddTaskModal onSave={handleAddTask} />}
        <div className="container">
          <SearchBox />
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions handleAddTask={() => setShowModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
}
export default TaskBoard;
