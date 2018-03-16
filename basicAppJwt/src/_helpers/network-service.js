// Intercepta todas as requisiões feitas com o axios , possibilitando tratar erros escíficos retornados pela api
import axios from 'axios';
import { history } from '../_helpers';

export default {
    setupInterceptors: () => {
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
