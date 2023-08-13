import css from './Card.module.css'

const Card = ({ className, children }) => {
    return (
        <div className={`${css.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card;
