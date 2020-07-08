import axios from 'axios';
const BASE_URL = `http://www.omdbapi.com/?apikey=760858f1`;

class Api {
  #instance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
  });

  async getById(imdbID) {
    const req = await this.#instance.get(null, {
      params: {
        i: imdbID
      }
    });
    return req.data;
  }
}

export default new Api;