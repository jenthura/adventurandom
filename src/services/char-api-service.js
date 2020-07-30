import config from '../config'

const CharApiService = {
    

    getChar() {
        return fetch(`${config.API_ENDPOINT}/char`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    },

    getCharById() {
        return fetch(`${config.API_ENDPOINT}/char`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default CharApiService;