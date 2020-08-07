import config from '../config'

const MonsterApiService = {

    getMonster() {
        console.log(config.API_ENDPOINT)
        return fetch(`${config.API_ENDPOINT}/monster`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default MonsterApiService;