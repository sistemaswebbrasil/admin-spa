import axios from 'axios';
import { history } from '../_helpers';

export default {
    setupInterceptors: (store) => {
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                history.push('/login');
            }
            return Promise.reject(error);
        });

    }
};
