import axios from "axios";

const patterns = {
  fullName: /^(\w.+\s).+$/,
  lastName: /^[A-Za-z]{3,}$/,
  userName: /^[A-Za-z0-9_.]{3,}$/,
  email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
  confirm_password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
  phoneNumber: /^[-+]?[0-9]+$/,
};

export const validate = (field, Regex) => {
  if (patterns[Regex].test(field)) return true;
  return false;
};

export const validateInput = (event) =>
  validate(event.target.value, event.target.attributes.name.value);

export const randomInt = (length) => Math.floor(Math.random() * (length - 1));

export const get_rand = (array) => {
  array.sort(() => 0.5 - Math.random());
  return array;
};

const baseurl = "http://134.209.64.28:8082/";
// process.env.NODE_ENV === "production"
//   : "http://134.209.64.28:8082/";

export const axiosInstance = axios.create({
  baseURL: `${baseurl}/`,
  timeout: 10000,
  withCredentials: true,
});

export const getPlayTime = (time) => {
  if (Number.isNaN(Number(time))) return "0s";
  const mins = Math.floor(Number(time) / 60);
  const secs = Math.floor(Number(time) % 60);
  return `${mins > 0 ? `${mins} mins ` : ""}${secs > 9 ? `${secs}s` : ""}`;
};

export const axiosCall = async ({ path, payload, method, contentType }) => {
  const url = `${baseurl}${path}`;
  const headers = {
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
    // "x-access-token": localStorage.token,
    // "Authorization": `Bearer ${localStorage.getItem("token")}`
  };
  // const headers = {
  //   'x-access-token': localStorage.token,
  //   'Content-Type': contentType || 'application/json',
  // };
  const axiosdata = {
    method,
    url,
    data: payload,
    headers,
    json: true,
  };

  try {
    const result = await axios(axiosdata);
    const data = result && result.data;
    return data;
  } catch (error) {
    throw error;
  }
};

const dashboardName = {
  catalogue: "Catalogue",
  explore: "Explore",
  favourites: "Favourites",
  organization: "Organization overview",
  create: "Create videos",
};
export const getDashboardNavName = (pathname) => {
  const path = pathname.split("/")[1];
  return dashboardName[path] || "Dashboard";
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const saveToLocalStorage = ({ body }) => {
  const { accessToken } = body;
  if (body) {
    const token = accessToken || localStorage.getItem("token");
    localStorage.setItem("token", token);
    localStorage.setItem("body", JSON.stringify(body));
    token && localStorage.setItem("isAuthenticated", true);
  }
};

// export const decryptQuery = (string) => {
//   const cryptr = new Cryptr(process.env.SECRET);
//   const decryptedString = cryptr.decrypt(string);
//   return decryptedString;
// };

export const cardStyle = (imgURL) => {
  const card = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 99.98%, rgba(255, 255, 255, 0) 99.99%, rgba(255, 255, 255, 0.2) 100%), url(${imgURL})`,
  };
  return card;
};
