import Header from '../components/Layouts/Header';
import Hero from '../components/Route/Hero';
import Categories from '../components/Route/Categories';
import BestDeals from '../components/Route/BestDeals';
import FeaturedProduct from '../components/Route/FeaturedProduct';
import Events from '../components/Events';
import Sponsored from '../components/Route/Sponsored';
import Footer from '../components/Layouts/Footer';

function HomePage() {
    return (
        <div>
            <Header activeHeading={1} />
            <Hero />
            <Categories />
            <BestDeals />
            <Events />
            <FeaturedProduct />
            <Sponsored />
            <Footer />
        </div>
    );
}

export default HomePage;
