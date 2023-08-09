import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';

function App() {
  return (
    <div className='app'>
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
