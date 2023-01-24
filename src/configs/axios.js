import axios from "axios";

export const RequestMethod = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

export async function axiosRequest(method = RequestMethod.GET, resourceIdentifier, payload = null) {
  const baseURL = "http://localhost:8000/";
  // const baseURL = "https://jsask-forum-backend.herokuapp.com/";
  axios.defaults.baseURL = baseURL;
  const result = axios[method.toLowerCase()](resourceIdentifier, payload);
  return result;
}
