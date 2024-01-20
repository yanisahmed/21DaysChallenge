import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="h-16">0</div>
      <div className="flex">
        <button className="bg-sky-500 hover:bg-sky-700 text-white rounded-2xl p-2 w-48 me-2">
          Increment
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white rounded-2xl p-2 w-48 me-2">
          Decrement
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white rounded-2xl p-2 w-48">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
