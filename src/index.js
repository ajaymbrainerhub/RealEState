import React, { Suspense }from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { store } from './store/store';
import "../src/components/Language/i18nextInit";

  ReactDOM.render(
    <Suspense fallback="...">
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
    </Suspense>,

   document.getElementById('root'));



