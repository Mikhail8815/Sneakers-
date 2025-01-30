import React from 'react';
import {useParams} from "react-router-dom";
import {adidasArr} from "./Adidas";
import {Error404} from "./Error404";


export const Modal = () => {
    const params = useParams()
    const currentModal = adidasArr.find(el => el.id === Number(params.id))
    console.log(params)
    // @ts-ignore
    return (
        <div>
            {currentModal ?
                <>
                    <h2>{currentModal.model}</h2>
                    <h4>{currentModal.collection}</h4>
                    <h3>{currentModal.price}</h3>
                    <img src={currentModal.picture} alt={currentModal.model}/>
                </>
                : <h3>Такой модели нет!</h3>
            }
        </div>
    );
};

