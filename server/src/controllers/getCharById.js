const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";


module.exports = (req, res) => {
    const id = req.params.id; // o const {id} = req.params;
    axios.get(URL + id) //response.data = traen los personajes
       .then(response => {
        const {status, name, species, origin, image, gender} = 
           response.data;
           const character = {
            id, status, name, species, origin, image, gender
           }
       
           if (character.name) return res.json(character)
            else  return res.status (404).send("Not found")
       })
       .catch (error => {
        return res.status(500).send(error.message);
       })
}









/*   version promises
    const id = req.params.id; // o const {id} = req.params;
    axios.get(URL + id) //response.data = traen los personajes
       .then(response => {
        const {status, name, species, origin, image, gender} = 
           response.data;
           const character = {
            id, status, name, species, origin, image, gender
           }
       
           if (character.name) return res.json(character)
            else  return res.status (404).send("Not found")
       })
       .catch (error => {
        return res.status(500).send(error.message);
       })
}

*/