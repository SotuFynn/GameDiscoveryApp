import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '8d04d1b593bf4cdb90ddf9b646e75be5'
    }
})