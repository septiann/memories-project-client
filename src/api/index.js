import axios from 'axios';
import 'dotenv/config';

const url = process.env.API_URL_POSTS;

export const fetchPosts = () => axios.get(url);