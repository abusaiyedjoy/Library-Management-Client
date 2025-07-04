import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { IBook } from "../types/types";
import toast from "react-hot-toast";
import { useAddBookMutation } from "../redux/app/baseApi";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [createBook, { data, isLoading }] = useAddBookMutation();
  const navigate = useNavigate();
  console.log("Upper", data);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IBook>({
    defaultValues: {
      copies: 1,
      available: true,
    },
  });

  const onSubmit: SubmitHandler<IBook> = async (formData) => {
    try {
      await createBook(formData).unwrap();
      toast.success("Book Added Successfully!");
      navigate("/");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to add book");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
          Add New Book
        </h1>
        <p className="text-gray-600 text-lg">
          Add a new book to your collection
        </p>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
          <h2 className="text-white text-lg font-semibold">Book Information</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
            <div>
              <label htmlFor="title" className="block text-gray-700 text-sm font-medium mb-1">
                Book Title <span className="text-red-500">*</span>
              </label>
              <input
                id="title"
                type="text"
                placeholder="Enter book title"
                {...register("title", { required: "Book Title is required" })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
            </div>

            <div>
              <label htmlFor="author" className="block text-gray-700 text-sm font-medium mb-1">
                Author <span className="text-red-500">*</span>
              </label>
              <input
                id="author"
                type="text"
                placeholder="Enter author name"
                {...register("author", { required: "Author is required" })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.author ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>}
            </div>

            <div>
              <label htmlFor="genre" className="block text-gray-700 text-sm font-medium mb-1">
                Genre <span className="text-red-500">*</span>
              </label>
              <select
                id="genre"
                {...register("genre", { required: "Genre is required" })}
                className={`w-full p-2.5 border rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 ${
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
              {errors.genre && <p className="text-red-500 text-xs mt-1">{errors.genre.message}</p>}
            </div>

            <div>
              <label htmlFor="isbn" className="block text-gray-700 text-sm font-medium mb-1">
                ISBN <span className="text-red-500">*</span>
              </label>
              <input
                id="isbn"
                type="text"
                placeholder="e.g., 978-0-000-00000-0"
                {...register("isbn", { required: "ISBN is required" })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.isbn ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.isbn && <p className="text-red-500 text-xs mt-1">{errors.isbn.message}</p>}
            </div>

            <div>
              <label htmlFor="copies" className="block text-gray-700 text-sm font-medium mb-1">
                Total Copies <span className="text-red-500">*</span>
              </label>
              <input
                id="copies"
                type="number"
                {...register("copies", {
                  required: "Total Copies is required",
                  valueAsNumber: true,
                  min: { value: 1, message: "Must be at least 1 copy" },
                })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.copies ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.copies && <p className="text-red-500 text-xs mt-1">{errors.copies.message}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-gray-700 text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              placeholder="Enter a brief description of the book..."
              {...register("description")}
              className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-y"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2.5 text-gray-700 bg-gray-200 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
