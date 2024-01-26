import axios from "axios"

export const getData = async() => {
    return await axios.get("https://jsonplaceholder.typicode.com/users")
}



// export const getData = async() => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users").then(res=> res.json())
//     if (!res) {
//         throw new Error("something Went wrong")
//     }

//     return res
// }