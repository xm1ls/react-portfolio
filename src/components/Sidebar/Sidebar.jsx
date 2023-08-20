import { Route, Routes } from 'react-router-dom';
import css from './Sidebar.module.css'
import { SidebarItem } from './SidebarItem/SidebarItem';

export const Sidebar = (props) => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path='/projects/*' element=
                    {
                        <div className={css.item_wrapper}>
                            {
                                props.state.projects_links.map(l => <SidebarItem text={l} />)
                            }
                        </div>
                    }
                />
            </Routes>
        </div>

    );
}