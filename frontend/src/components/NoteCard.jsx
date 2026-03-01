import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../utils/utils";

function NoteCard({ note }) {
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
            <button className="btn btn-ghost btn-xs text-error">
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NoteCard;
