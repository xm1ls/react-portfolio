import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {
    return (
        <div className={css.outer_container}>
            <div className={css.header}>
                <NavLink to='/about' className={navData => navData.isActive ? css.active : css.a}>
                    <p className={css.about}>
                        /about.
                    </p>
                </NavLink>

                <NavLink to='/projects' className={navData => navData.isActive ? css.active : css.a}>
                    <p className={css.projects}>
                        /projects.
                    </p>
                </NavLink>

                <NavLink to='/contacts' className={navData => navData.isActive ? css.active : css.a}>
                    <p className={css.contacts}>
                        /contacts.
                    </p>
                </NavLink>
            </div>
        </div>

    );
}