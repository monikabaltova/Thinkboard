import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";

function NotesNotFound() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center justify-center space-y-6 py-16 text-center">
      <div className="bg-neutral rounded-full p-8">
        <NotebookIcon className="text-secondary size-10" />
      </div>
      <h3 className="text-secondary/70 text-2xl font-bold">No notes yet</h3>
      <p className="text-secondary/50">
        Ready to organize your thoughts? Create your first note to get started
        on your journey.
      </p>
      <Link to="/create" className="btn btn-secondary">
        Create Your First Note
      </Link>
    </div>
  );
}

export default NotesNotFound;
