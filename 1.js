function ownProperty(obj) {
    for (let key in obj) {
      console.log(key+':'+ obj[key])
    }
}  
const student = {
    name: 'Ivan',
    surname: 'Ivanov',
    age: 19,
};
  
ownProperty(student);