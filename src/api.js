import toast from "react-hot-toast";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const token = import.meta.env.VITE_API_TOKEN;

async function fetchApi(endpoint = "", options = {}) {
  const url = `${apiBaseUrl}${endpoint}`;

  const defaultHeaders = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
    },
  };

  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      throw new Error("Some error occured");
    }
    return await response.json();
  } catch (error) {
    toast.error("Error when fetching data");
    throw error;
  }
}

export default fetchApi;
