import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../utils/utils";
import api from "../utils/axios";
import toast from "react-hot-toast";

function NoteCard({ note, setNotes }) {
  async function handleDelete(e, id) {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  }
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-secondary/50 border-neutral border-t-4 border-solid transition-all duration-200 hover:shadow-lg"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions mt-4 items-center justify-between">
          <span className="text-base-content/60 text-sm">
            {formatDate(new Date(note.createdAt))}
          </span>
          <div className="flex items-center gap-1">
            <PenSquareIcon className="size-4" />
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
