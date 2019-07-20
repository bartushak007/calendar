import { FETCH_DATA } from "./type";

import { resolvePath } from "../../helpers/index";

export const fetchEvents = () => dispatch => {
  fetch(resolvePath("api/data.json"))
    .then(j => j.json())
    .then(data => {
      
      return dispatch({ type: FETCH_DATA, events: data });
    });
};
