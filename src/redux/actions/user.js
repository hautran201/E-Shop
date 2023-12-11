import httpRequest from '../../utils/httpRequest';
import {
    loadUserFail,
    loadUserRequest,
    loadUserSuccess,
} from '../reducers/userSlice';

export const loadUser = () => async (dispatch) => {
    try {
        dispatch(loadUserRequest());
        const { data } = await httpRequest.get('/users/');
        console.log(data);

        dispatch(loadUserSuccess(data.user));
    } catch (err) {
        dispatch(loadUserFail(err.response.data.message));
    }
};
