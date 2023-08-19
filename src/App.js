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

  const grid_side = { gridTemplateAreas: `'header header header' 'sidebar main main''sidebar main main'` };
  const grid = { gridTemplateAreas: `'header header header' 'main main main''main main main'` };

  return (
    <BrowserRouter>
      <div className='app' /*style={window.location.pathname != '/projects' ? grid : grid_side}*/>
        <Header />
        <Sidebar />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
