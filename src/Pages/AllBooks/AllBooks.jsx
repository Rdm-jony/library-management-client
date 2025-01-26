import { useQuery } from "@tanstack/react-query";
import Loading from "../../Common/Loading/Loading";
import axios from "axios";
import BookCard from "../../Common/BookCard/BookCard";
import { useState } from "react";

const AllBooks = () => {
    const [count, setCount] = useState(0)
    const [category, setCategory] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemPerPage, setItemPerPage] = useState(2)
    const { data: books = [], isLoading } = useQuery({
        queryKey: ['feactureBook', currentPage, itemPerPage, category],
        queryFn: async () => {
            const { data } = await axios.get(`https://library-management-server-bice.vercel.app/books?home=false&size=${itemPerPage}&currentPage=${currentPage}&category=${category}`, { withCredentials: true })

            return data;
        }
    })

    const { data } = useQuery({
        queryKey: ['count', category],
        queryFn: async () => {
            const { data } = await axios.get(`https://library-management-server-bice.vercel.app/booksCount?category=${category}`)
            setCount(data?.count)
            return data;
        }
    })
    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const { data } = await axios.get('https://library-management-server-bice.vercel.app/category')

            return data
        }
    })

    const totalPage = Math.ceil(count / itemPerPage)
    const pages = [...Array(totalPage).keys()].map(num => num + 1)
    const handleButton = (e) => {
        setCurrentPage(e.target.innerText)

    }
    const handleButtonPrevious = () => {

        setCurrentPage(parseInt(currentPage) - 1)
    }
    const handleButtonNext = () => {
        setCurrentPage(parseInt(currentPage) + 1)

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="flex">
            <aside className="flex w-1/3 flex-col h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <h2 className="text-primary font-semibold text-4xl">Search</h2>

                <div className="relative mt-6">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                            <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </span>

                    <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>

                        {
                            categories.map(category => <button onClick={() => {
                                setCategory(category.category)
                                setCurrentPage(1)
                            }} className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">

                                <span className="mx-4 font-medium">{category.category}</span>
                            </button>)
                        }






                        <hr className="my-6 border-gray-200 dark:border-gray-600" />




                    </nav>

                </div>
            </aside>
            <div>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 h-screen overflow-auto">
                    {
                        books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                    }
                </div>
                {/* pagination */}
                <div className="flex justify-center">
                    <button disabled={currentPage == 1} href="#" onClick={() => handleButtonPrevious()} className={`px-4 py-2 mx-1 text-gray-500 capitalize bg-white rounded-md  dark:bg-gray-800 dark:text-gray-600  hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200`}>
                        <div className="flex items-center -mx-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>

                            <span className="mx-1">
                                previous
                            </span>
                        </div>
                    </button>

                    {
                        pages.map(page => <button onClick={handleButton} href="#" className={`hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform  rounded-md sm:inline dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${currentPage == page ? 'bg-primary text-white' : ""}`}>
                            {page}
                        </button>)
                    }

                    <button href="#" disabled={totalPage == currentPage} onClick={() => handleButtonNext()} className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                        <div className="flex items-center -mx-1">
                            <span className="mx-1">
                                Next
                            </span>

                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-1 rtl:-scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>


        </div>
    );
};

export default AllBooks;