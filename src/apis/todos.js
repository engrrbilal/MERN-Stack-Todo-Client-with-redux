import axios from 'axios';
const api = 'http://localhost:4000/api/todos';
// Get all todos
export const getAll = () =>
    axios.get(api)
    .then(res => {
        return res.data;
    }).catch((error) => {
        console.log("Error While getting todos")
        return(error)
    })
// Add todo
export const add = (data) =>
    axios.post(api, data)
    .then(res => console.log(res.data))
    .catch((error) => {
    console.log("Error While Add todo")
    return(error)
})