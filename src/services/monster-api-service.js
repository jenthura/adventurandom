import config from '../config'

const MonsterApiService = {

    getMonsterById(id) {
        return fetch(`${config.API_ENDPOINT}/monster/${id}`)
        .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
    }
}

export default MonsterApiService;