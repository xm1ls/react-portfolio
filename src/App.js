import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';
// import { About } from './components/About/About';
// import { Projects } from './components/Projects/Projects'
// import { Contacts } from './components/Contacts/Contacts'

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Sidebar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
