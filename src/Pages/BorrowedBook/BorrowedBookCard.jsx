import React from 'react';

const BorrowedBookCard = ({ collection }) => {
  const {
    bookId,
    buyerEmail,
    buyerName,
    bookImage,
    bookCategory,
    bookName,
    borrowDate,
    returnDate,
  } = collection;
  return (
    <div className="max-w-md mx-auto bg-gradient-to-r from-indigo-100 to-blue-100 shadow-2xl rounded-xl overflow-hidden border border-gray-300 hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex">
        {/* Book Image */}
        <img
          src={bookImage}
          alt={bookName}
          className="w-32 h-32 object-cover rounded-l-xl"
        />

        {/* Book Details */}
        <div className="p-6 flex-1 space-y-3">
          <h2 className="text-2xl font-extrabold text-gray-800 truncate">
            {bookName}
          </h2>
          <p className="text-sm font-medium text-gray-700">Category: <span className="text-indigo-600 font-semibold">{bookCategory}</span></p>
          <p className="text-sm text-gray-700">Borrowed by: <span className="text-blue-600 font-medium">{buyerName}</span></p>
          <p className="text-sm text-gray-700">Email: <span className="text-blue-600 underline">{buyerEmail}</span></p>
          <p className="text-sm text-gray-700">Borrow Date: <span className="text-indigo-600">{borrowDate}</span></p>
          <p className="text-sm text-gray-700">Return Date: <span className="text-red-600">{returnDate}</span></p>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCard;