import {studentType} from "../02_Objects/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student: studentType;

beforeEach(() => {
    student = {
        id: 1,
        name: 'Artsiom',
        age: 26,
        isActive: false,
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
})

test('new tech skill should be added to student', () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, 'JavaScript');

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe('JavaScript');
    expect(student.technologies[3].id).toBeDefined();
})


test('student should be made active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})


test('does student live in city?', () => {

    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})