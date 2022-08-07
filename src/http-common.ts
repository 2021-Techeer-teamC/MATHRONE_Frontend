import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: false,
    headers: {
        "Content-Type" : "application/json",
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
});
