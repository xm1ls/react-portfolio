import css from './Header.module.css';

export const Header = () => {
    return (
        <div className={css.outer_container}>
            <div className={css.header}>
                <a href='/about' >
                    <p className={css.about}>
                        /about.
                    </p>
                </a>

                <a href='/projects'>
                    <p className={css.projects}>
                        /projects.
                    </p>
                </a>

                <a href='/contacts'>
                    <p className={css.contacts}>
                        /contacts.
                    </p>
                </a>
            </div>
        </div>

    );
}