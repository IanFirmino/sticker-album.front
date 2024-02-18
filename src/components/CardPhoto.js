import styles from './CardPhoto.module.css'
import PropTypes from 'prop-types'

function CardPhoto({name, photo, description}){

    return (
        <div className={styles.container}>
            <h1>{name}</h1>
            <img src={photo} alt={name}></img>
            <p>{description}</p>
        </div>
    )
}

CardPhoto.propTypes = {
    name: PropTypes.string.isRequired,
    photo: PropTypes.string,
    description: PropTypes.string
}

CardPhoto.defaultProps = {
    photo: "https://via.placeholder.com/150"
}

export default CardPhoto;