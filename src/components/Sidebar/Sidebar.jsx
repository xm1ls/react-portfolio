import { Route, Routes } from 'react-router-dom';
import css from './Sidebar.module.css'
import { SidebarItem } from './SidebarItem/SidebarItem';

export const Sidebar = () => {
    return (
        <div className={css.container}>
            <Routes>
                <Route path='/projects/*' element={
                    <div className={css.item_wrapper}>
                        <SidebarItem text='Ⅰ' />
                        <SidebarItem text='Ⅱ' />
                        <SidebarItem text='Ⅲ' />
                        <SidebarItem text='Ⅳ' />
                    </div>
                } />
            </Routes>
        </div>

    );
}