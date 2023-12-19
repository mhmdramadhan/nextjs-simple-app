function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      <div className={"flex gap-x-2"}>
        <Button type="submit" className="bg-blue-600">
          Register
        </Button>
        <Button type="button" className="bg-pink-600">
          Login
        </Button>
      </div>
    </div>
  );
}

function Button({ children, type, className }) {
  return (
    <button type={type} className={`${className} text-white px-4 py-2 rounded`}>
      {children}
    </button>
  );
}

export default App;
