import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const { _id, bookName, bookImage, authorName, tags, rating, description, price, authorImage } = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="bg-gray-200 w-full py-10 rounded-lg">
                <figure className="w-2/5 h-56 mx-auto hover:scale-125 transition-all duration-700">
                    <img
                        src={bookImage}
                        alt="bookImage" />
                </figure>
            </div>
            <div className="card-body space-y-2">
                <p>{tags}</p>
                <h2 className="card-title">{bookName}</h2>
                <p>{description?.length > 70 ? `${description.substring(0, 70)}...` : description}</p>

                <p className="text-secondary text-xl font-bold">${price}</p>
                <div className="flex justify-between items-center flex-wrap">
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={authorImage} />
                            </div>
                        </div>
                        <p>{authorName}</p>
                    </div>

                    <div className="rating">
                        {
                            [...Array(5).keys()].map(number => <input type="radio" name="rating-2" className={`mask mask-star ${number + 1 <= parseInt(rating) ? 'bg-orange-400' : 'bg-orange-200'}`} />
                            )

                        }

                    </div>
                </div>
                <Link to={`../books/${_id}`}>
                    <button className="relative rounded-full w-full inline-block py-3 px-6 text-neutral-50 bg-gradient-to-r from-primary to-primary  group overflow-hidden cursor-pointer">
                        <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                        <span className='relative z-20 flex justify-center gap-3 text-xl font-semibold '>View Details</span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;