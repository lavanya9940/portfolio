import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import axios from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const sendWebVitalsToElasticsearch = async (webVitalsData) => {
//   try {
//     const response = await axios.post('http://your-elasticsearch-url/index-name/_doc', webVitalsData, {
//       auth: {
//         username: 'your-username',
//         password: 'your-password'
//       }
//     });
//     console.log('Data sent to Elasticsearch successfully:', response.data);
//   } catch (error) {
//     console.error('Error sending data to Elasticsearch:', error);
//   }
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
