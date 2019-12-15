import axios from "axios";

axios.interceptors.response.use((response) => {return response.data}, (error: { response: { status: number; }; }) => {
  if (
    !(
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    )
  ) {
    console.log("Error occured: ", error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};