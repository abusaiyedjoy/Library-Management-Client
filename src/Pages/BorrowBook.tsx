import { useForm, SubmitHandler } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "../redux/app/baseApi";
import { useAddBorrowMutation } from "../redux/app/borrowApi";
import { BorrowFormData } from "../types/types";

const BorrowBook = () => {
  const { _id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading: bookLoading } = useGetBookByIdQuery(_id);
  const [updateBook] = useUpdateBookMutation();
  const [addBorrow] = useAddBorrowMutation();

  const book = data?.data;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BorrowFormData>({});

  const onSubmit: SubmitHandler<BorrowFormData> = async (formData) => {
    if (!book) return;

    const quantity = parseInt(formData?.quantity.toString());
    if (quantity > book.copies) {
      toast.error("Quantity exceeds available copies");
      return;
    }

    const updatedCopies = book.copies - quantity;
    const available = updatedCopies > 0;

    try {
      await addBorrow({
        book: book._id,
        quantity,
        dueDate: formData.dueDate,
      }).unwrap();

      await updateBook({
        id: book._id,
        body: { ...book, copies: updatedCopies, available },
      }).unwrap();

      toast.success("Book borrowed successfully!");
      navigate("/borrow-summary");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Failed to borrow book");
    }
  };

  if (bookLoading || !book) return <div>Loading...</div>;

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

      <h2 className="text-2xl md:text-3xl place-items-start font-bold mb-4">
        Borrow Book: {book.title}
      </h2>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-500 p-4">
          <h2 className="text-white text-lg font-semibold">Book Information</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 gap-x-6 gap-y-5 mb-5">
            <div className="mb-4">
              <label
                htmlFor="copies"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Quantity <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                {...register("quantity", {
                  required: true,
                  min: 1,
                  max: book.copies,
                })}
                className=" w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm">Invalid quantity</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="copies"
                className="block text-gray-700 text-sm font-medium mb-1"
              >
                Due Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                {...register("dueDate", { required: true })}
                className="w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 border-gray-300"
              />
              {errors.dueDate && (
                <p className="text-red-500 text-sm">Due date is required</p>
              )}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="submit"
              className="px-6 py-2.5 text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg"
            >
              Add Borrow
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BorrowBook;
