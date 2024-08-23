import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/items';

export function getItems() {
    try {
        return axios.get(REST_API_BASE_URL);
    } catch (error) {
        console.error("Error fetching items:", error);
    }
}