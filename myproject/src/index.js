// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}
const square = number => number * number;

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
const address = {
  street: '',
  city: '',
  country: '',
};
//Destructing address object 
const { street, city, country } = address;
//Spread Operator ...
//const first = [1, 2, 3];
//const second = [4, 5, 6];
//const combined = first.concat(second)
//const combined = [...first, 'a', ...second, 'd'];
//console.log(combined);
const first = { name: 'Mosh' };
const second = { job: 'Instructor' };
const combined = { ...first, ...second, location: 'Australia' };
console.log(combined);

class Person {
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log('walk');
  }
}
class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log('teach');
  }
}
const teacher = new Teacher('Girish');


//sayHello();
console.log(square(5));
const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);
