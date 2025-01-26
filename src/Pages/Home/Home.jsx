import Banner from "./Banner/Banner";
import FeaturedBook from "./FeaturedBook/FeaturedBook";
import TopCategories from "./TopCategories/TopCategories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopCategories></TopCategories>
            <FeaturedBook></FeaturedBook>
        </div>
    );
};

export default Home;