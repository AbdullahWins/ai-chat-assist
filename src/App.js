import "./App.css";

function App() {
  return (
    <div className="md:flex h-screen md:justify-center md:items-center mx-2">
      <div className="px-96 py-48 bg-gray-700">
        <div className="card lg:w-96">
          <h2 className="text-center text-2xl font-bold py-4">
            Sign into your website
          </h2>
          <input
            type="text"
            placeholder="username"
            className="input input-bordered w-full bg-white text-gray-700 rounded-none"
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered w-full bg-white text-gray-700 rounded-none my-2"
          />
          <button className="btn w-full bg-gray-400 border-none text-white rounded-none">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
