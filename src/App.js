import css from './App.module.css';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App(props) {

  // const grid_side = { gridTemplateAreas: `'header header header' 'sidebar main main''sidebar main main'` };
  // const grid = { gridTemplateAreas: `'header header header' 'main main main''main main main'` };

  return (
    <BrowserRouter>
      <div className={css.container} /*style={window.location.pathname != '/projects' ? grid : grid_side}*/>
        <Header />
        <Sidebar state={props.state} dispatch={props.dispatch}/>
        <Main state={props.state}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
