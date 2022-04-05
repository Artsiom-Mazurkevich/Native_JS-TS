type LocalCityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type TechType = {
   id: number
   title: string
}

export type studentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}



export const student: studentType = {
    id: 1,
    name: 'Artsiom',
    age: 26,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }

    },
    technologies: [
        {
            id:1,
            title: 'Html'
        }, {
            id:2,
            title: 'Css'
        }, {
            id:3,
            title: 'React'
        }
    ]
}

console.log(student.technologies[2].title)