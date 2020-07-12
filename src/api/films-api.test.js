import api from './films-api';

describe('test api', () => {
  test('API is get data about movie by IMDB id', async () => {
    const response = await api.getById('tt3896198');
    expect(response.Title).toBe('Guardians of the Galaxy Vol. 2');
  });
  
  test('API is find movie by title', async () => {
    const response = await api.searchByTitle('star');
    expect(response.Title).toBe('Star Wars: Episode IV - A New Hope');
  });
});