import React from 'react';

export type personType2 = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    person: personType2
    food: Array<string>
    car: {model: string}
}


export const Destructuring: React.FC<PropsType> = ({title,person,...props}) => {

    //const {title} = props;            тоже самое что и в круглых скобках после =
    //const {name} = props.person

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>{person}</div>
        </div>
    );
};

