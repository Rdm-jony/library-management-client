
const AddBook = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const bookName = form.bookName.value;
        const bookImage = form.bookImage.value;
        const quantity = form.quantity.value;
        const authorName = form.authorName.value;
        const totalPages = form.totalPages.value;
        const publishYear = form.publishYear.value;
        const format = form.format.value;
        const language = form.language.value;
        const tags = form.tags.value;
        const bookCategory = form.bookCategory.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const century = form.century.value;

        const newBook = { bookName, bookImage, quantity, authorName, totalPages, publishYear, format, language, tags, bookCategory, rating, description }
        console.log(newBook)

    }
    return (
        <section className="max-w-4xl p-6 mx-auto bg-primary bg-opacity-10 rounded-md shadow-md dark:bg-gray-800">
            <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

            <form onSubmit={handleOnSubmit}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3 ">
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="bookName">Book Name</label>
                        <input id="bookName" name="bookName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="bookImage">Book Image(URL)</label>
                        <input id="bookImage" name="bookImage" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="quantity">Quantity of the book</label>
                        <input id="quantity" name="quantity" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>

                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="authorName">Author Name
                        </label>
                        <input id="authorName" name="authorName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="totalPages">Total Pages
                        </label>
                        <input id="totalPages" name="totalPages" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="publishYear">Publish Year
                        </label>
                        <input id="publishYear" name="publishYear" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="format">Foramt
                        </label>
                        <input id="format" name="format" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="language">Language
                        </label>
                        <input id="language" name="language" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="tags">Tags
                        </label>
                        <input id="tags" name="tags" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="century">Century
                        </label>
                        <input id="century" name="century" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="authorName">Category
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="bookCategory" id="bookCategory">
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                        </select>
                    </div>
                    <div>
                        <label className="text-gray-700 dark:text-gray-200" for="rating">Rating
                        </label>
                        <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="rating" id="rating">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="col-span-3">
                        <label className="text-gray-700 dark:text-gray-200" for="description">Description
                        </label>
                        <textarea
                            name="description"
                            className="textarea mt-2 textarea-bordered textarea-md w-full"></textarea>                    </div>
                </div>

                <div className="form-control mt-6">
                    <button className="relative inline-block py-3 px-6 text-neutral-50 bg-gradient-to-r from-primary to-primary group overflow-hidden cursor-pointer">
                        <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                        <span className='relative z-20 flex justify-center gap-3 text-xl font-semibold '>Add Book</span>
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddBook;