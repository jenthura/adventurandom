import config from '../config'

const LocaFlavorApiService = {

    getLocaFlavor() {
        return fetch(`${config.API_ENDPOINT}/location`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default LocaFlavorApiService;