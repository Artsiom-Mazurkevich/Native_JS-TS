test('should take old man older then 90', () => {
    const ages = [18,20,22,25,23,19,30,1,100,14,90];


    const predicate = (age: number) => {
        return age > 90
    }

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(100)
})

test('should take courses chipper 160', () => {
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'React', price: 150},
    ];

    const chipCourses = courses.filter(c => c.price < 160)

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS')
    expect(chipCourses[1].title).toBe('React')

})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true},
    ];

    const completedTasks = tasks.filter(t => t.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(2)
    expect(completedTasks[1].id).toBe(4)

})