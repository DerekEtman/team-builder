import React from 'react';
import { useState } from 'react';

const CardForm = props =>{
    const [card, setCard] = useState({name: "", role: "", email: ""});
    console.log(card);
    const changeHandler = event =>{
        setCard({...card, [event.target.name]: event.target.value});
    };

    const submitCard = event => {
        event.preventDefault();
        const newCard = {
            ...card,
            id:Date.now()
        };
        props.addNewCard(newCard);
        setCard({
        name: "",
        role: "",
        email: ""})
    }

    return(
            <form onSubmit={submitCard}>
                <label htmlFor="name">Hello, My name is </label>
                <input 
                type="text" 
                name="name" 
                placeholder="Name Here"
                value={card.name}
                onChange={changeHandler}/>

                <label htmlFor="role">. My role at this company is </label>
                <input 
                type="text" 
                name="role" 
                placeholder="Job Title" 
                value={card.role}
                onChange={changeHandler}/>

                <label htmlFor="email"> and you can email me at </label>
                <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={card.email}
                onChange={changeHandler}/>

                <button type="submit">Looks good, Save it!</button>
            </form>
    );
};

export default CardForm;