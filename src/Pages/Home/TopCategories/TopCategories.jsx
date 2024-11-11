import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CategoryCard from "../../../Common/CategoryCard/CategoryCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const TopCategories = () => {
    const { data: categories } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const { data } = await axios.get('http://localhost:5000/category')
            return data
        }
    })

    return (
        <div className=" bg-sky-100 w-full">
            <h2 className="text-5xl  font-semibold relative left-1/2 translate-x-[-50%]  inline-block bg-sky-100 px-5 text-center z-20">Top Categories Book</h2>
            <div className="max-w-6xl mx-auto border-2 border-primary relative -top-5 z-10 left-0 rounded-md p-5 pt-10">
                <Swiper slidesPerView={3}
                    // spaceBetween={30}
                    navigation={true}
                    loop={true}
                    modules={[Navigation]}

                >
                    {
                        categories?.map((category, idx) => <SwiperSlide><CategoryCard key={idx} categoryInfo={category}></CategoryCard></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default TopCategories;