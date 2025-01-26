import React from 'react';
import useAuthHooks from '../../hooks/useAuthHooks';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Common/Loading/Loading';
import axios from 'axios';
import BookCard from '../../Common/BookCard/BookCard';
import BorrowedBookCard from './BorrowedBookCard';

const BorrowBooks = () => {
    const { user } = useAuthHooks()
    console.log(user?.email)
    const { data: myBooks = [], isLoading } = useQuery({
        queryKey: ['myBook', user?.email],
        queryFn: async () => {
            const { data } = await axios.get(`https://library-management-server-bice.vercel.app/myBooks/${user?.email}`, { withCredentials: true })

            return data;
        },

    })
    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(myBooks)
    return (
        <div>
            {
                myBooks?.map(book => <BorrowedBookCard collection={book}></BorrowedBookCard>)
            }
        </div>
    );
};

export default BorrowBooks;