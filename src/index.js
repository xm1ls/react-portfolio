import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/redux-store'

// let ProjectRoute = projects_links.map((l) => <Route path={`/projects/${l}`} element={<ProjectItem text={l} />} />)

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerender = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </React.StrictMode>
  );
}

rerender(store.getState());
store.surscribe(() => { rerender(store.getState()) });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
