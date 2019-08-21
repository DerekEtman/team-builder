import React from 'react';
import { useState } from 'react';

const CardForm = props =>{
    const [card, setCard] = useState({name: "", role: "", email: ""});

    const changeHandler = event =>{
        setCard({...NodeIterator, [event.target.name]: event.target.value});
    };

    const submitCard = event => {
        event.preventDefault();
        const newCard = {
            ...card,
            id:Date.now()
        };
        props.addNewCard(newCard);
        setCard({name: "", role: "", email: ""})
    }

    return(
            <form onSubmit={submitCard}>
                <label htmlFor="Name">Hello, My name is </label>
                <input 
                type="text" 
                name="Name" 
                placeholder="Name Here"
                value={card.name}
                onChange={changeHandler}/>

                <label htmlFor="Role">. My role at this company is </label>
                <input 
                type="text" 
                name="Role" 
                placeholder="Job Title" 
                value={card.role}
                onChange={changeHandler}/>

                <label htmlFor="Email"> and you can email me at </label>
                <input 
                type="email" 
                name="Email" 
                placeholder="Email" 
                value={card.email}
                onChange={changeHandler}/>

                <button type="submit">Looks good, Save it!</button>
            </form>
    );
};

export default CardForm;