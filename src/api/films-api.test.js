import api from './films-api';

it('API is get data about films by IMDB id', async () => {
  const request = await api.getById('tt3896198');
  expect(request.data.Title).toBe('Guardians of the Galaxy Vol. 2');
});