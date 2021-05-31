import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ robots }) => {


    return (

        <div className='card-div'>

            {//this backet must need for js 
                //looping all the robot ..map loop all the user
                robots.map((user, i) => {
                    return (
                        <Card

                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email} />
                    )
                })


            }


        </div>


    );
}

export default CardList;