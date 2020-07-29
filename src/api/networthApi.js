import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://canopy-frontend-task.now.sh/api/networth";

export function getNetworth() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
