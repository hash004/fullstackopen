import axios from 'axios';

const getAllPersons = () => {
  const request = axios.get('http://localhost:3001/persons')
  return request.then((res)=>res.data);
}

const addPerson = (person) => {
  const request = axios.post('http://localhost:3001/persons', person)
  return request.then(res=> res.data);
}

export default {
  getAllPersons,
  addPerson,
}