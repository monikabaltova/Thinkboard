import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

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

      {loading && <Loading />}
    </div>
  );
}

export default Home;
