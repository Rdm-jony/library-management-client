import { useLoaderData } from 'react-router-dom';
import book1 from '../../assets/book1.png'
import book2 from '../../assets/book2.png'
import { useState } from 'react';
import Modal from '../../Common/Modal/Modal';

const BooksDetails = () => {
    const data = useLoaderData()
    const { _id, bookName, bookImage, quantity, authorName, totalPages, publishYear, format, language, tags, bookCategory, rating, description, price, authorImage, century } = data;
    const gallery = ['https://gramentheme.com/html/bookle/assets/img/shop-details/02.png', 'https://gramentheme.com/html/bookle/assets/img/shop-details/03.png', bookImage]
    const [img, setImg] = useState(bookImage)
    return (
        <div>
            <div className='flex justify-between items-center bg-sky-100'>
                <div>
                    <img src={book1} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='text-5xl font-semibold text-primary mb-2'>Shop Details</h2>
                    <p className='text-xl text-primary font-semibold'><span>Home</span><span className='mx-2'>{'>'}</span>Shop Details</p>
                </div>
                <div>
                    <img src={book2} alt="" />
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl max-w-6xl mx-auto">
                <div className='w-1/3'>
                    <figure className='w-full bg-gray-100 h-96 border-2'>
                        <img
                            className='w-2/3 h-80'

                            src={img}
                            alt="Album" />
                    </figure>
                    <div className='flex gap-10 my-5'>
                        {
                            gallery.map(img => <div onClick={() => setImg(img)} className='w-28 h-40 border-2 border-primary rounded-md cursor-pointer'><img className='w-full h-full' src={img} alt="" /></div>)
                        }
                    </div>
                </div>
                <div className="card-body w-2/3 space-y-3">
                    <div className='flex gap-10 items-center'>
                        <h2 className="card-title text-3xl">{bookName}</h2>
                        <p className='text-2xl font-semibold text-lime-500'>Stock availability({quantity})</p>
                    </div>
                    <div className='flex gap-2 items-center mr-5'>
                        <div className="rating">
                            {
                                [...Array(5).keys()].map(number => <input type="radio" name="rating-2" className={`mask mask-star ${number + 1 <= parseInt(rating) ? 'bg-orange-400' : 'bg-orange-200'}`} />
                                )

                            }

                        </div>
                        <p>(1 Customer Reviews)</p>

                    </div>
                    <div className="flex items-center gap-2">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={authorImage} />
                            </div>
                        </div>
                        <p>{authorName}</p>
                    </div>
                    <p className='flex-grow-0'>{description}</p>
                    <p className='text-3xl text-secondary font-bold'>${price}</p>
                    <div className='grid grid-cols-4 bg-gray-100 p-5 gap-5 rounded-lg border-2'>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Tags:</span>{tags}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Total Pages:</span>{totalPages}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Publish Year:</span>{publishYear}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Category:</span>{bookCategory}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Language:</span>{language}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Format:</span>{format}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Century:</span>{century}</h3>
                        <h3 className='font-semibold'><span className='text-primary font-bold  mr-2'>Quantity:</span>{quantity}</h3>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="btn btn-primary">Borrow</button>
                    </div>
                </div>
            </div>
            <Modal book={data}></Modal>
        </div>
    );
};

export default BooksDetails;