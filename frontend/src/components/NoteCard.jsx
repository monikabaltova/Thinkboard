import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

function NoteCard({ note }) {
  return (
    <Link
      to={`/note/${note._id}`}
      className="card border-t-4 border-solid border-[#e293ab] bg-neutral-600 transition-all duration-200 hover:shadow-lg"
    >
      <div className="card-body">
        <h3 className="card-title text-base-content">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>
        <div className="card-actions mt-4 items-center justify-between">
          <span className="text-base-content/60 text-sm">{note.createdAt}</span>
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
