import axios from 'axios';

export class BaseApiService {

    get httpClient() {
        return axios.create({
        });
    }



}