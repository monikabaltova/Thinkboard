import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

function Navbar() {
  return (
    <header className="border-base-content/10 bg-neutral border-b">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-secondary font-mono text-3xl font-bold tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-secondary">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
