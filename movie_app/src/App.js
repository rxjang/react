import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
    return (
        <div>
            <h2> I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img src={picture} alt={name}/>
        </div>
    );
}

const foodILike = [
    {
        id : 1,
        name : 'kimchi',
        image : 'https://www.wearesovegan.com/wp-content/uploads/2020/09/howtomakevegankimchirecipe-h3.jpg',
        rating : 5 ,
    },
    {
        id : 2,
        name : 'chicken',
        image : 'https://thestayathomechef.com/wp-content/uploads/2016/06/Fried-Chicken-4-1.jpg',
        rating : 4.9 ,
    },
    {
        id : 3,
        name : 'kimbap',
        image : 'https://static.wixstatic.com/media/bd25c5_4223b7a51a044a61b0ce1f1e7d04535f~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_90,usm_0.66_1.00_0.01/bd25c5_4223b7a51a044a61b0ce1f1e7d04535f~mv2.jpg',
        rating : 4.4 ,
    }
];


function App() {
    return (
        <div className="App">
            {foodILike.map(dish => (
                <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
            ))}
        </div>
    );
}

Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired,
}

export default App;