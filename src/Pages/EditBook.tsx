import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { IBook } from "../types/types";
import toast from "react-hot-toast";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../redux/app/baseApi";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";

const EditBook = () => {
  const navigate = useNavigate();
  const { _id } = useParams();
  const { data, isLoading, error, refetch } = useGetBookByIdQuery(_id!);
  const [updateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBook>({
    defaultValues: {
      copies: 0,
      available: true,
    },
  });

  const book = data?.data;

  React.useEffect(() => {
    if (book) {
      reset(book);
    }
  }, [book, reset]);

  const onSubmit: SubmitHandler<IBook> = async (updatedData) => {
    try {
      await updateBook({ id: _id, body: updatedData });
      refetch();
      toast.success("Book updated successfully!");
      navigate("/");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update book");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading book.</div>;
  if (!book) return <div>No book found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-6">
        <a
          href="/"
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          <FaArrowLeft className="mr-2 text-sm" />
          <span className="font-medium text-sm">Back to Library</span>
        </a>
      </div>

      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Edit Book
        </h1>
        <p className="text-gray-600 text-lg">
          Update book information in your library
        </p>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
          <h2 className="text-white text-lg font-semibold">Book Information</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Book Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter book title"
                {...register("title", { required: "Book Title is required" })}
                className={`w-full p-2.5 border rounded-md ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="author"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Author <span className="text-red-500">*</span>
              </label>
              <input
                id="author"
                type="text"
                placeholder="Enter author name"
                {...register("author", { required: "Author is required" })}
                className={`w-full p-2.5 border rounded-md ${
                  errors.author ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.author && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.author.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="genre"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Genre <span className="text-red-500">*</span>
              </label>
              <select
                id="genre"
                {...register("genre", { required: "Genre is required" })}
                className={`w-full p-2.5 border rounded-md bg-white ${
                  errors.genre ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a genre</option>
                <option value="FICTION">FICTION</option>
                <option value="NON_FICTION">NON_FICTION</option>
                <option value="SCIENCE">SCIENCE</option>
                <option value="HISTORY">HISTORY</option>
                <option value="BIOGRAPHY">BIOGRAPHY</option>
                <option value="FANTASY">FANTASY</option>
              </select>
              {errors.genre && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.genre.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="isbn"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                ISBN <span className="text-red-500">*</span>
              </label>
              <input
                id="isbn"
                type="text"
                placeholder="e.g., 978-0-000-00000-0"
                {...register("isbn", { required: "ISBN is required" })}
                className={`w-full p-2.5 border rounded-md ${
                  errors.isbn ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.isbn && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.isbn.message}
                </p>
              )}
            </div>

            <div className="col-span-2">
              <label
                htmlFor="copies"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Total Copies <span className="text-red-500">*</span>
              </label>
              <input
                id="copies"
                type="number"
                {...register("copies", {
                  required: "Total Copies is required",
                })}
                className={`w-full p-2.5 border rounded-md ${
                  errors.copies ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.copies && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.copies.message}
                </p>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter a brief description of the book..."
              {...register("description")}
              className="w-full p-2.5 border border-gray-300 rounded-md resize-y"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-2.5 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 shadow-lg"
            >
              Update Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
