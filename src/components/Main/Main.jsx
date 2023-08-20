import css from './Main.module.css'
import { ProjectItem } from '../Sidebar/ProjectItem/ProjectItem';
import { HeaderItem } from '../Header/HeaderItem/HeaderItem';
import { Route, Routes } from 'react-router-dom';

export const Main = (props) => {
    return (
        <div className={css.container}>
            <Routes>
                {
                    props.state.header_links.map(
                        l => <Route path={`/${l}`} element={<HeaderItem text={`/${l}`} />} />
                    )
                }

                {
                    props.state.projects_links.map(
                        l => <Route path={`/projects/${l}`} element={<ProjectItem text={l} />} />
                    )
                }
            </Routes>
        </div>
    );
}