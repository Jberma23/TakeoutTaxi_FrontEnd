import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { CookiesProvider } from 'react-cookie';
const cors = require('cors')

App.use(cors())
ReactDOM.render(
    <App />
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const PORT = process.env.PORT || 3001
App.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
