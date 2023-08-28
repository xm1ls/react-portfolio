import { Route, Routes } from 'react-router-dom';
import css from './Sidebar.module.css'
import { SidebarItem } from './SidebarItem/SidebarItem';
import React from 'react';
import { Connect, connect } from 'react-redux';
import { addProject, changeProject } from '../../redux/projectsReducer'

const Sidebar = (props) => {

    let ChangeProject = (e) => {
        let text = e.target.value;
        props.ChangeProject(text)
    }

    return (
        <div className={css.container}>
            <Routes>
                <Route path='/projects/*' element=
                    {
                        <div className={css.wrapper}>
                            <textarea className={css.textarea} onChange={ChangeProject} value={props.new_project_text} />
                            <button className={css.button} onClick={props.AddProject}>add project</button>
                            {
                                props.projects_links.map(l => <SidebarItem text={l} />)
                            }
                        </div>
                    }
                />
            </Routes>
        </div>

    );
}

let mapStateToProps = (state) => {
    return {
        projects_links: state.projectsPage.projects_links,
        new_project_text: state.projectsPage.new_project_text
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddProject: () => {
            dispatch(addProject())
            dispatch(changeProject(''))
        },
        ChangeProject: text => {
            dispatch(changeProject(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar) 