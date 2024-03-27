// Q1 - Square each element of an array using map function
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

// Q2 - Function to determine grade based on score using ternary operators
function getGrade(score) {
  return score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F';
}
const studentScore = 85;
console.log(`Grade: ${getGrade(studentScore)}`);

// Q3 - Object representing a car, changing its year and extracting model and year using object destructuring
const car = {
  companyName: 'Toyota',
  model: 'Corolla',
  year: 2019
};

function changeCarYear(carObject, newYear) {
  carObject.year = newYear;
}

changeCarYear(car, 2022);
const { model, year } = car;
console.log(`Model: ${model}, Year: ${year}`);

// Q4 - Filter prime numbers from an array
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = numbersArray.filter(num => isPrime(num));
console.log(primeNumbers);

// Q5 - Use cases of map, filter, and reduce functions
// Map: Transforming an array into another array with modified elements
// Filter: Filtering elements from an array based on a condition
// Reduce: Reducing an array to a single value by performing an operation on each element

// Q6 - Asynchronous function using async-await to fetch data from an API
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

// Q7 - Nested object representing a person, using optional chaining to access phone number safely
const person = {
  name: 'John Doe',
  address: {
    street: '123 Main St',
    city: 'City',
    state: 'State'
  }
};

console.log(person.contact?.phoneNumber);
