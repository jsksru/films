const BASE_URL = `http://www.omdbapi.com/?apikey=760858f1`;

class Api {

  async getById(imdbID) {
    try {
      const reqest = await fetch(`${BASE_URL}&i=${imdbID}`);
      const data = await reqest.json();
      return data;
    }
    catch {
      return false;
    }
  }

  async searchByTitle(title) {
    try {
      const reqest = await fetch(`${BASE_URL}&t=${title}`);
      const data = await reqest.json();
      return data;
    }
    catch {
      return false;
    }
  }

}

export default new Api;