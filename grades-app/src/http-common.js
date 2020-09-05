import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
 // baseURL: 'http://localhost:8081/',
 //mudei a baseURL de local para a do servidor do backend no heroku
  baseURL: 'https://desafio-04-backend-igti.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
