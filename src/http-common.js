import axios from "axios";


export default axios.create({
    baseURL: "http://localhost:5000/api/v1",

    headers: {
        "Content-type": "multipart/form-data",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*"
    },
    mode: "cors"
});