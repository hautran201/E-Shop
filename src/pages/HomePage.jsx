import Header from '../components/Layouts/Header';
import Hero from '../components/Route/Hero';
import Categories from '../components/Route/Categories';
import BestDeals from '../components/Route/BestDeals';

function HomePage() {
    return (
        <div>
            <Header activeHeading={1} />
            <Hero />
            <Categories />
            <BestDeals />
        </div>
    );
}

export default HomePage;
