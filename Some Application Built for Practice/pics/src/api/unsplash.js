import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID r9eFMR8OzkOoPJlq-3cIA1wor2juSr3gOTwU9cvZ4EQ"
      }
});