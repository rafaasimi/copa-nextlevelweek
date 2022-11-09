import axios from 'axios';

export const api = axios.create({
  baseURL: 'IP_DA_MAQUINA:3333'
})