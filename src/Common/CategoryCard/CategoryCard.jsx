import './CategoryCard.css'
const CategoryCard = ({ categoryInfo }) => {
    const { category, image } = categoryInfo;
    return (
        <div className='flex justify-center'>
            <div>
                <div className="w-80 h-80 rounded-full border p-5 flex justify-center items-center relative bg-white">
                    <img src={image} alt="" className="w-28 h-36" />
                    <div className="w-64 h-64 absolute rounded-full border-2 border-dashed border-primary borderAnimate"></div>
                </div>
                <h3 className="text-center text-2xl font-semibold">{category}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;