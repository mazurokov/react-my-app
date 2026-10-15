const API_BASE_URL = import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";

export const USERS_API_URL = `${API_BASE_URL.replace(/\/$/, "")}/users`;
