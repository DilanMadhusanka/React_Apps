import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 51252a9e39d009a9488e59c6ba292a7a550bad00c10060817c65b3635108cb4c'
    }
});