import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import NoteCard from "../components/NoteCard";

function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotes() {
      try {
        const res = await axios.get("http://localhost:8000/api/notes");
        setNotes(res.data);
      } catch (error) {
        console.log("Error fetching notes");
        toast.error("Failed to load notes");
      } finally {
        setLoading(false);
      }
    }

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="mx-auto mt-6 max-w-7xl p-4">
        {loading && <Loading />}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
