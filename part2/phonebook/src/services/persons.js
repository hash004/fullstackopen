import axios from 'axios';

const addPerson = (person) => {
  const request = axios.post('http://localhost:3001/persons', person)
  return request.then(res=> res.data);
}

export default {
  addPerson,
}