import axios from "axios";
import { Show } from "./model/Show";

const BASE_URL = "https://api.tvmaze.com/";
export const searchShows2 = (keyword: string) => {
  return axios
    .get<{ show: Show }[]>(BASE_URL + "search/shows?q=" + keyword)
    .then((res) => {
      const shows = res.data.map((item) => item.show);
      const castPromises = [];
      for (let i = 0; i < shows.length; i++) {
        const castAndShowsPromises = axios
          .get(BASE_URL + "shows/" + shows[i].id + "/cast")
          .then((res) => {
            const cast = res.data.map((item: any) => item.person);
            return { show: shows[i], cast };
          });
        castPromises.push(castAndShowsPromises);
      }
      return Promise.all(castPromises);
    });
};

export const searchShows = async (keyword: string) => {
  const response = await axios.get<{ show: Show }[]>(
    BASE_URL + "search/shows?q=" + keyword
  );
  const shows = response.data.map((item) => item.show);
  const castPromises = [];

  for (let i = 0; i < shows.length; i++) {
    castPromises.push(getCast(shows[i]));
  }
  return Promise.all(castPromises);
};

export const getCast = async (show: Show) => {
  const castAndShowsPromises = await axios.get(
    BASE_URL + "shows/" + show.id + "/cast"
  );
  const cast = castAndShowsPromises.data.map((item: any) => item.person);
  return { show, cast };
};

export const loadShowDetail = async (showId: number) => {
  const res = await axios.get<{ show: Show }>(BASE_URL + "shows/" + showId);
  return res.data;
};
