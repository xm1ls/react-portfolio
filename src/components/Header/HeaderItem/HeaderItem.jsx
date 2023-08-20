import css from './HeaderItem.module.css'

export const HeaderItem = (props) => {
    return (
        <div className={css.container}>
            {props.text}
        </div>
    )
}