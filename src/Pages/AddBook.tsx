import { useForm, SubmitHandler } from 'react-hook-form';
import { FaArrowLeft } from 'react-icons/fa';
import { AddBookFormInputs } from '../types/types';



const AddBook = () => {
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddBookFormInputs>({
    defaultValues: {
      publishYear: currentYear, 
      totalCopies: 1, 
    },
  });

  const onSubmit: SubmitHandler<AddBookFormInputs> = (data) => {
    console.log('Form Data Submitted:', data);
    alert('Book Added! (Check console for data)');
    reset(); 
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-8 md:p-10 flex flex-col items-center">
      <div className="w-full max-w-4xl mb-6">
        <a href="#" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
          <FaArrowLeft className="mr-2 text-sm" />
          <span className="font-medium text-sm">Back to Library</span>
        </a>
      </div>

      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Add New Book</h1>
        <p className="text-gray-600 text-lg">Add a new book to your collection</p>
      </div>

      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4">
          <h2 className="text-white text-lg font-semibold">Book Information</h2>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-5">
            <div>
              <label htmlFor="bookTitle" className="block text-gray-700 text-sm font-medium mb-1">
                Book Title <span className="text-red-500">*</span>
              </label>
              <input
                id="bookTitle"
                type="text"
                placeholder="Enter book title"
                {...register('bookTitle', { required: 'Book Title is required' })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.bookTitle ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.bookTitle && (
                <p className="text-red-500 text-xs mt-1">{errors.bookTitle.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="author" className="block text-gray-700 text-sm font-medium mb-1">
                Author <span className="text-red-500">*</span>
              </label>
              <input
                id="author"
                type="text"
                placeholder="Enter author name"
                {...register('author', { required: 'Author is required' })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.author ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.author && (
                <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="genre" className="block text-gray-700 text-sm font-medium mb-1">
                Genre <span className="text-red-500">*</span>
              </label>
              <select
                id="genre"
                {...register('genre', { required: 'Genre is required' })}
                className={`w-full p-2.5 border rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 ${
                  errors.genre ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select a genre</option>
                <option value="Fiction">Fiction</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Mystery">Mystery</option>
                <option value="Thriller">Thriller</option>
                <option value="Romance">Romance</option>
                <option value="Biography">Biography</option>
                <option value="History">History</option>
                <option value="Self-Help">Self-Help</option>
              </select>
              {errors.genre && (
                <p className="text-red-500 text-xs mt-1">{errors.genre.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="publishYear" className="block text-gray-700 text-sm font-medium mb-1">
                Publish Year
              </label>
              <input
                id="publishYear"
                type="number"
                {...register('publishYear', {
                  valueAsNumber: true,
                  min: { value: 1000, message: 'Invalid year' },
                  max: { value: currentYear, message: `Year cannot be after ${currentYear}` },
                })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.publishYear ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.publishYear && (
                <p className="text-red-500 text-xs mt-1">{errors.publishYear.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="isbn" className="block text-gray-700 text-sm font-medium mb-1">
                ISBN <span className="text-red-500">*</span>
              </label>
              <input
                id="isbn"
                type="text"
                placeholder="e.g., 978-0-000-00000-0"
                {...register('isbn', {
                  required: 'ISBN is required',
                  pattern: {
                    value: /^(?:ISBN(?:-13)?:?)(?=[0-9]{13}$)([0-9]{3}-){2}[0-9]{3}[0-9X]$/, // Basic ISBN-13 pattern
                    message: 'Invalid ISBN format (e.g., 978-0-000-00000-0)',
                  },
                })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.isbn ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.isbn && <p className="text-red-500 text-xs mt-1">{errors.isbn.message}</p>}
            </div>

            <div>
              <label htmlFor="totalCopies" className="block text-gray-700 text-sm font-medium mb-1">
                Total Copies <span className="text-red-500">*</span>
              </label>
              <input
                id="totalCopies"
                type="number"
                {...register('totalCopies', {
                  required: 'Total Copies is required',
                  valueAsNumber: true,
                  min: { value: 1, message: 'Must be at least 1 copy' },
                })}
                className={`w-full p-2.5 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
                  errors.totalCopies ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.totalCopies && (
                <p className="text-red-500 text-xs mt-1">{errors.totalCopies.message}</p>
              )}
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
              {...register('description')}
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
              className="px-6 py-2.5 text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg font-medium hover:from-purple-700 hover:to-pink-600 transition-all duration-200 shadow-lg"
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