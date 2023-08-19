import css from './Main.module.css'
import { About } from '../About/About';
import { Projects } from '../Projects/Projects';
import { Contacts } from '../Contacts/Contacts';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { Route, Routes } from 'react-router-dom';

export const Main = (props) => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path='/about' Component={About}/>
                <Route path='/projects' Component={Projects}/>
                <Route path='/contacts' Component={Contacts}/>
                <Route path='/projects/Ⅰ' element={<ProjectItem text='Ⅰ'/>}/>
                <Route path='/projects/Ⅱ' element={<ProjectItem text='Ⅱ'/>}/>
                <Route path='/projects/Ⅲ' element={<ProjectItem text='Ⅲ'/>}/>
                <Route path='/projects/Ⅳ' element={<ProjectItem text='Ⅳ'/>}/>
            </Routes>
        </div>
    );
}