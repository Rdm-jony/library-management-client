import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import DatePicker from "react-datepicker";
import { format } from "date-fns";


import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Swal from 'sweetalert2';

const Modal = ({ book }) => {
    const { bookName, bookImage, bookCategory, _id, quantity } = book;
    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const handleSubmit = async (e) => {
        e.preventDefault()
        const buyerEmail = user?.email;
        const buyerName = user?.displayName;
        const borrowDate = format(new Date(), "yyyy-MM-dd");
        const returnDate = format(startDate, "yyyy-MM-dd")
        const bookId = _id;
        const newBorrowed = { bookId, buyerEmail, buyerName, bookImage, bookCategory, bookName, borrowDate, returnDate }
        const { data } = await axios.post('https://library-management-server-bice.vercel.app/myBook', newBorrowed)
        console.log(data)
        if (data.insertedId) {
            const quantityRemaining = parseInt(quantity) - 1;
            const { data } = await axios.patch(`https://library-management-server-bice.vercel.app/books/${_id}`, { quantityRemaining })
            if (data.modifiedCount) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Booked!",
                    showConfirmButton: false,
                    timer: 1500
                });
                document.getElementById('my_modal_3').close()
                window.location.reload()
            }
        } else {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `${data.message}`,
                showConfirmButton: false,
                timer: 1500
            });
            document.getElementById('my_modal_3').close()
        }
    }
    return (
        <div>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form className="mt-4" onSubmit={handleSubmit}>

                        <label for="emails-list" class="text-sm text-gray-700 dark:text-gray-200">
                            Email address
                        </label>
                        <label className="block mt-3" for="email">
                            <input type="email" readOnly defaultValue={user?.email} name="email" id="email" placeholder="user@email.xyz" className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>
                        <label for="emails-list" class="text-sm text-gray-700 dark:text-gray-200">
                            Book Name
                        </label>
                        <label className="block mt-3" for="bookName">
                            <input type="text" name="bookName" id="bookName" readOnly defaultValue={bookName} className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300" />
                        </label>

                        <label for="emails-list" class="text-sm text-gray-700 dark:text-gray-200">
                            Return Date
                        </label>
                        <label className="block mt-3" for="bookName">
                            <div className=' block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300'>
                                <DatePicker dateFormat='yyyy-MM-dd' className='focus:outline-none' selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div></label>
                        <div>
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <button className="relative w-full rounded-lg inline-block py-3 px-6 text-neutral-50 bg-gradient-to-r from-primary to-primary group overflow-hidden cursor-pointer">
                                <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                                <span className='relative z-20 flex justify-center gap-3 text-xl font-semibold '>Confirm</span>
                            </button>
                        </div>
                    </form>
                </div>
            </dialog >
        </div >
    );
};

export default Modal;