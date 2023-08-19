import { NavLink } from 'react-router-dom';
import css from './Header.module.css';

export const Header = () => {

    const activeLink = ({isActive}) => isActive ? css.active : css.a;

    return (
        <div className={css.outer_container}>
            <div className={css.header}>
                <NavLink to='/about' className={activeLink}>
                    <p className={css.about}>
                        /about.
                    </p>
                </NavLink>

                <NavLink to='/projects' className={activeLink}>
                    <p className={css.projects}>
                        /projects.
                    </p>
                </NavLink>

                <NavLink to='/contacts' className={activeLink}>
                    <p className={css.contacts}>
                        /contacts.
                    </p>
                </NavLink>
            </div>
        </div>

    );
}