import './rating.scss';
import emptyStar from './empty.png';
import filledStar from './filled.png';

const Rating = ({props}) => {

    let stars = [];
    let rating = props.rating;
    const ratingScale = 5;

    // Vérifie que le nbr d'étoile ne peut pas dépasser le max d'étoiles possibles
    if(rating > ratingScale){
        rating = ratingScale;
    }

    // Ajoute les étoiles pleines
    for (var i = 0; i < rating ; i++) stars.push(filledStar)

    // Ajoute le reste d'étoiles vides
    for (var j = 0; j < ratingScale - rating ; j++) stars.push(emptyStar)


    return (
        <div className='rating'>
            {
                stars.map((star, index) =>{
                    return(
                        <img src={star} alt="rating star" key={index} />
                    )
                })
            }
        </div>
    );
};

export default Rating;