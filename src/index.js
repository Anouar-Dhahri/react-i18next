import React from 'react';
import ReactDOM from 'react-dom/client';
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs:['en', 'fr', 'ar'],
    fallbackLng:'en',
    debug: false,

    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookies']
    },
    backend:{
      loadPath:'/assets/locales/{{lng}}/translation.json'
    }
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
