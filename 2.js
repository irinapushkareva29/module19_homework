function haveProperty(property,obj) {
    if (property in obj){
      return true 
    } else return false
  }
  
const student = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 19,
};
  
console.log(haveProperty('name',student));