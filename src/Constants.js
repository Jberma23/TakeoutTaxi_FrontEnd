const prod = {
    url: {
        BASE_URL: 'https://takeouttaxi-backend.herokuapp.com'
    }
};
const dev = {
    url: {
        BASE_URL: 'http://localhost:3000'
    }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;