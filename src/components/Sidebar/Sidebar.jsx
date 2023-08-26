import { Route, Routes } from 'react-router-dom';
import css from './Sidebar.module.css'
import { SidebarItem } from './SidebarItem/SidebarItem';
import React from 'react';
import { addProject, changeProject } from '../../redux/projectsReducer'

export const Sidebar = (props) => {

    let AddProject = () => {
        props.dispatch(addProject());
        props.dispatch(changeProject(''));
    }

    let ChangeProject = (e) => {
        // let text = area_text.current.value;
        let text = e.target.value;
        props.dispatch(changeProject(text));
    }

    let sidebarItems = props.state.projectsPage.projects_links.map(l => <SidebarItem text={l} />);

    return (
        <div className={css.container}>
            <Routes>
                <Route path='/projects/*' element=
                    {
                        <div className={css.wrapper}>
                            <textarea className={css.textarea} onChange={ChangeProject} value={props.state.projectsPage.new_project_text}/>
                            <button className={css.button} onClick={AddProject}>add project</button>
                            { sidebarItems }
                        </div>
                    }
                />
            </Routes>
        </div>

    );
}