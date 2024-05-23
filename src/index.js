import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {RecoilRoot} from "recoil";

const root = ReactDOM.createRoot(document.getElementById('root'));

if(!window.Kakao.isInitialized()) {
    window.Kakao.init(process.env.REACT_APP_JAVASCRIPT_KEY);
    console.log(window.Kakao.isInitialized())
}

root.render(
    <BrowserRouter>
        <RecoilRoot>
        <App />
        </RecoilRoot>
    </BrowserRouter>
);

