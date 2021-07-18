import React from 'react';
import FoodItem from './FoodItem';

function FoodList(props) {
    const{foods}=props;
    return (
        <div className='container'>
            <div className='row'>
                {
                    foods.map((food,index)=>{
                        return <FoodItem
                                image={food.image}
                                name={food.name}
                                price={food.price}
                                currency={food.currency}
                                description={food.description}
                                key={index}
                                />
                    })
                }

            </div>
            
        </div>
    )
}

export default FoodList;
