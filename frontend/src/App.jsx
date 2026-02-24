import { Route, Routes } from "react-router";
import toast from "react-hot-toast";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetailPage from "./pages/NoteDetailPage";

function App() {
  return (
    <div>
      <button
        onClick={() => toast.success("weeee")}
        className="flex items-center justify-between rounded bg-blue-500 p-4 text-white"
      >
        Click
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
