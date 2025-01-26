import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { FaArrowRight } from "react-icons/fa";
import BookCard from "../../../Common/BookCard/BookCard";

const FeaturedBook = () => {
    const { data: books = [] } = useQuery({
        queryKey: ['feactureBook'],
        queryFn: async () => {
            const { data } = await axios.get('https://library-management-server-bice.vercel.app/books?home=true')
            return data;
        }
    })
    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="text-5xl font-semibold">Bookle Top Books</h2>
                <div className="form-control mt-6">
                    <button className="relative border-2 border-primary inline-block py-3 px-6 text-black rounded-full bg-gradient-to-r from-white to-white group overflow-hidden cursor-pointer">
                        <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                        <span className='relative z-20 flex justify-center gap-3 text-xl font-semibold items-center'>Explore More <FaArrowRight /></span>
                    </button>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {
                    books?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedBook;