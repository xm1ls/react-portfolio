import { NavLink, Route, Routes } from 'react-router-dom';
import css from './SidebarItem.module.css'

export const SidebarItem = (props) => {

    const activeLink = ({isActive}) => isActive ? css.active : css.a;

    return (
        <NavLink to={`/projects/${props.text}`} className={activeLink}>
            { props.text }
        </NavLink>
    );
}

const Item = () => {
    return (
        <Routes>
            <Route path='/projects/Ⅰ' Component={Item}/>
            text
        </Routes>
    );
}