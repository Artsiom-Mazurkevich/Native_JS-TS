import {personType2} from "./Destructuring";


export let person: personType2;
beforeEach(() => {
    person = {
        name: 'Artem',
        age: 20,
        lessons: [{title:'English'}, {title:'Math'}],
        address: {
            street: {
                title: 'Frunze'
            }
        }
    }
})

test('', () => {

    //const age = person.age;
    //const lessons = person.lessons;
    const {age, lessons} = person;             // create 2 constants with name 'age' and 'lessons'
    let {age: a, lessons: l} = person;          // create 2 let with name 'a' and 'l'


    expect(age).toBe(20);
    expect(lessons.length).toBe(2)
})


test('', () => {

})