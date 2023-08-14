import css from './Main.module.css'
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Contacts } from '../Contacts/Contacts';
import { Route, Routes } from 'react-router-dom';

export const Main = (props) => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path='/about' Component={About}/>
                <Route path='/projects' Component={Projects}/>
                <Route path='/contacts' Component={Contacts}/>
            </Routes>
        </div>
    );
}