import { ArrowLeftIcon, Axis3D } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import api from "../utils/axios";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required!");
      return;
    }

    setIsLoading(true);
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Note created!");
      navigate("/");
    } catch (error) {
      console.log("Error creating note", error);
      toast.error("Failed to create note");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-neutral min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-auto text-secondary max-w-2xl">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" /> Back to Notes
          </Link>

          <div className="card bg-neutral-700">
            <div className="card-body">
              <h2 className="card-title mb-4 text-2xl">Create New Note</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-control flex flex-col gap-1">
                  <label className="label">
                    <span className="label-text mr-2">Text</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered w-full bg-neutral-500"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control mb-4 flex flex-col gap-1">
                  <label className="label">
                    <span className="label-text">Content</span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered h-32 w-full bg-neutral-500"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-secondary"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating" : "Create Note"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateNote;
