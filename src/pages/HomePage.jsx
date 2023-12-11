import { useEffect } from 'react';
import { loadUser } from '../redux/actions/user';
import { useDispatch } from 'react-redux';
import Header from '../components/Layouts/Header';

function HomePage() {
    return (
        <div>
            <Header />
        </div>
    );
}

export default HomePage;
