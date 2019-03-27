//Destrucitng Arrays and Objects together

const companies  = [
    {name:'Google',location:'Mountain View'},
    {name:'Uber',location:'Down SanFransisco'},
    {name:'Faceboon',location:'Menlo Park'}
]

// let [location] = companies;
// console.log(location)
// OUTPUT:-{ name: 'Google', location: 'Mountain View' }
// let [{location}] = companies;
// console.log(location)
// // Output : Mountain View

const Google ={
    locations :['Mountain View','New york']
}
const {locations:[location]} =Google
console.log(location)

const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
  function isEngineer({title,department}) {
    var title = title;
    var department = department;
    return title === 'Engineer' && department === 'Engineering';
  }