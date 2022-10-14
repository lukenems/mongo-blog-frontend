import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PostContextProvider } from './context/PostsContext';
import { AuthContextProvider } from './context/AuthContext';

//can re-enable strict mode in Prod env

// line below is for React 18 which currently thows error for root.hasChildNodes()
// so reverting to Reactv17 for react-snap
//const root = ReactDOM.createRoot(document.getElementById("root"));

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <AuthContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </AuthContextProvider>
    </React.StrictMode>, rootElement);
} else {
  render(
    <React.StrictMode>
      <AuthContextProvider>
        <PostContextProvider>
          <App />
        </PostContextProvider>
      </AuthContextProvider>
    </React.StrictMode>, rootElement);
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// <React.StrictMode>
//     <AuthContextProvider>
//       <PostContextProvider>
//         <App />
//       </PostContextProvider>
//     </AuthContextProvider>
// </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
