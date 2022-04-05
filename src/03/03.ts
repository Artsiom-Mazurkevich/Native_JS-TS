import {studentType} from "../02_Objects/02";

export const addSkill = (student: studentType, skill: string) => {
  student.technologies.push({
      id: new Date().getTime(),
      title: skill})
}


export function makeStudentActive (s: studentType) {
    s.isActive = true
}


export const doesStudentLiveIn = (s: studentType, cityName: string) => {
    return s.address.city.title === cityName;
}
