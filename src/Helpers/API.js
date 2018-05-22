const API = (link)=>{
    return fetch(link)
        .then(response => response.json())
}
export default API