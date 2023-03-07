import api from '../api';
import endpoints from '../constants/endpoints';

const get = {
  getEpisodes: page => {
    const url = `${endpoints.episode}`;
    return api.get(url, {
      params: {
        page,
      },
    });
  },
  getEpisode: id => {
    const url = `${endpoints.episode}/${id}`;
    return api.get(url);
  },
  getCharacter: id => {
    const url = `${endpoints.character}/${id}`;
    return api.get(url);
  },
};

export default get;
