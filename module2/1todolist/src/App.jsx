import "./App.css";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import TaskBoard from "./task/TaskBoard.jsx";

function App() {
  return (
    <>
      <Header />
      <div className=" flex flex-col justify-center items-center ">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </>
  );
}

export default App;
