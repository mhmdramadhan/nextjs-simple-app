function App() {
  return (
    <div className="bg-slate-900 grid place-content-center min-h-screen">
      <div className={'flex gap-x-2'}>
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
}

function Button({ children }) {
  return (
    <button className={'bg-blue-600 text-white px-4 py-2 rounded'}>
      {children}
    </button>
  );
}

export default App;
