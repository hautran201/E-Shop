import { useEffect } from 'react';
import { loadUser } from '../redux/actions/user';
import { useDispatch } from 'react-redux';

function HomePage() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    }, []);

    return <div>HomePage</div>;
}

export default HomePage;
