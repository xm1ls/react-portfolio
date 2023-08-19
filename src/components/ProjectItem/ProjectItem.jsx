import css from './ProjectItem.module.css'

export const ProjectItem = (props) => {
    return (
        <div className={css.container}>
            {`/projects/${props.text}`}
        </div>
    );
}