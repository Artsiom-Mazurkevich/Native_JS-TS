
type personType = {
    name: string
    age: number
}



const people: personType[] = [
    {name:'Aleksey Ivanov', age: 25},
    {name:'Artem Mazurkevich', age: 20},
    {name:'Andrey Sidorov', age: 18},
    {name:'Nikolay Petrovsiy', age: 45},
]


const transform = (man: personType) => ({
      stack:['css','html','js','tdd','react'],
      firstName: man.name.split(' ')[0],
      lastName: man.name.split(' ')[1]

})


const devs = [
    {
        stack:['css','html','js','tdd','react'],
        firstName: 'Aleksey', lastName: 'Ivanov'
    },
    {
        stack:['css','html','js','tdd','react'],
        firstName: 'Artem', lastName: 'Mazurkevich'
    },
    {
        stack:['css','html','js','tdd','react'],
        firstName: 'Andrey', lastName: 'Sidorov'
    },
    {
        stack:['css','html','js','tdd','react'],
        firstName: 'Nikolay', lastName: 'Petrovsiy'
    }
]

const devMap = people.map(d => transform(d))
const devMap2 = people.map(d => ({
    stack:['css','html','js','tdd','react'],
    firstName: d.name.split(' ')[0],
    lastName: d.name.split(' ')[1]

}));
