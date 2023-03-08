import api from '../api';
import endpoints from '../constants/endpoints';

const get = {
  getEpisodes: (page, filter) => {
    let obj = {};
    const {key, value} = filter;
    obj.page = page;
    if (value !== '') {
      obj = {...obj, [key]: value};
    }
    const url = `${endpoints.episode}/`;
    return api.get(url, {
      params: obj,
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
