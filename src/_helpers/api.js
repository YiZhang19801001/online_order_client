import axios from "axios";

//* params
const baseURL = [
  `http://localhost:8000/api`,
  `http://kidsnparty.com.au/roben_api/groupon/public/api`,
  `http://localhost/groupon_api/public/api`
];

//* funtions
const makeRequest = () => {
  const localStorageUser = localStorage.getItem("staff_order_user");
  const user = localStorageUser ? JSON.parse(localStorageUser) : null;
  const api_token = user ? user.api_token : null;
  const headers = api_token ? { Authorization: `Bearer ${api_token}` } : {};
  return axios.create({
    baseURL: baseURL[0],
    headers
  });
};

// * exports stuffs
const api = makeRequest();

export { api };
