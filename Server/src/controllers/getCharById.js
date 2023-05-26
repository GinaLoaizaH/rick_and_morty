// const axios = require('axios')

// const getCharById = (res, id) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`)
//         .then(response => response.data)
//         .then(({ name, gender, species, origin, image, status }) => {

//             const character = {
//                 id,
//                 name,
//                 gender,
//                 species,
//                 origin,
//                 image,
//                 status
//             }

//             return res
//                 .writeHead(200, { 'Content-type': 'application/json' })
//                 .end(JSON.stringify(character))

//         })
//         .catch(error => {
//             return res
//                 .writeHead(500, { 'Content-type': 'text/plain' })
//                 .end(error.message)
//         })
// }

// module.exports = {
//     getCharById
// }
const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) => {
    try {
        const { id } = req.params

        const { data } = await axios(`${URL}/${id}`)
        // {name, gender, species, origin, image, status} = data
        if (!data.name) throw Error(`ID: ${id} not found`)

        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return res.status(200).json(character)

    } catch (error) {
        return error.message.includes('ID')
            ? res.status(404).send(error.message)
            : res.status(500).send(error.response.data.error)

    }


}


module.exports = {
    getCharById
}