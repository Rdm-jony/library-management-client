import { FaArrowRight } from 'react-icons/fa';
import bgShape from '../../../assets/bg-shape.png'
import heroGirl from '../../../assets/hero-girl.png'
import frame from '../../../assets/frame.png'

const Banner = () => {
    return (
        <div className="w-full min-h-screen bg-sky-100 relative">
            <div className='max-w-6xl mx-auto'>
                <img className='ml-auto' src={bgShape} alt="" />
                <div className='lg:w-2/3'>
                    <h1 className='text-7xl font-bold leading-snug mb-4'>Get Your New Book
                        With The Best Price</h1>
                    <a className="relative inline-block py-3 px-6 text-neutral-50 bg-gradient-to-r from-primary to-primary group overflow-hidden rounded-full">
                        <span className='absolute inset-0 bg-gradient-to-r duration-500 transition-transform from-secondary to-secondary -translate-x-full group-hover:translate-x-0 transform'></span>
                        <span className='relative z-20 flex items-center gap-3 text-xl font-semibold'>Shop Now <FaArrowRight /></span>
                    </a>
                </div>
                <img src={frame} className='absolute top-20 lg:right-1/2' alt="" />
                <img className='absolute bottom-0 right-0 lg:w-1/3' src={heroGirl} alt="" />

            </div>

        </div>
    );
};

export default Banner;