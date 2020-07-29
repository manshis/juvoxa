import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://canopy-frontend-task.now.sh/api/holdings";

export function getHoldings() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}
