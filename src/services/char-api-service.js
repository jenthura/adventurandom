import config from '../config'

const CharApiService = {

    getCharById(id) {
        return fetch(`${config.API_ENDPOINT}/char/${id}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default CharApiService;

//API_ENDPOINT: 'http://localhost:8000', ex. http://localhost:8000/char/3