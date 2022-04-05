

function icreaseAge (obj: userType) {
    obj.age++
}

type userType = {
    name: string
    age: number
}

test('increment age', () => {
    let user: userType = {
        name: 'Bob',
        age: 30
    }

    icreaseAge(user);

    expect(user.age).toBe(31);

    const man = user
    man.age = 50

    expect(man.age).toBe(50)
})





test('array test', () => {
    let users= [
        {
            name: 'Peddy',
            age: 45
        },
        {
            name: 'Dominick',
            age: 28
        }
    ]

    let admins = users;
    admins.push({name: 'Stive', age: 15})

    expect(users[2]).toEqual({name: 'Stive', age: 15});

})




test('value type test', () => {
    let num = 200

    let x = num;
    x = 300

    expect(x).toEqual(300);

})