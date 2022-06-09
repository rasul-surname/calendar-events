import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {store} from "./store";

import 'antd/dist/antd.css';
import './global.d.ts';
import './reset.css';
import './index.css';

import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<BrowserRouter><Provider store={store}><App/></Provider></BrowserRouter>);
