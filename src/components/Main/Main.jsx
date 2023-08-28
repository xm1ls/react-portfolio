import css from './Main.module.css'
import { ProjectItem } from '../Sidebar/ProjectItem/ProjectItem';
import { HeaderItem } from '../Header/HeaderItem/HeaderItem';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';

const Main = (props) => {
    return (
        <div className={css.container}>
            <Routes>
                {
                    props.header_links.map(
                        l => <Route path={`/${l}`} element={<HeaderItem text={`/${l}`} />} />
                    )
                }

                {
                    props.projects_links.map(
                        l => <Route path={`/projects/${l}`} element={<ProjectItem text={l} />} />
                    )
                }
            </Routes>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        header_links: state.headerPage.header_links,
        projects_links: state.projectsPage.projects_links
    }
}

export default connect(mapStateToProps)(Main)