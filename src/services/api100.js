import axios from 'axios';

export const apiSecretFriend = axios.create({
  baseURL: 'https://api100.herokuapp.com/sf',
})