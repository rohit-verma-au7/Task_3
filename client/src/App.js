import Task from "./task";
function App() {
  return (
    <div>
      <h1 className="h-20 w-full bg-slate-400 inline-flex justify-center items-center font-bold text-3xl">
        Task Number 3
      </h1>
      <div className="bg-slate-200 h-[91vh] w-full inline-flex justify-center items-center">
        <Task />
      </div>
    </div>
  );
}

export default App;
