import { useSelector } from "react-redux";

/**
 * 
 * @typedef {Object} RequestHeaders
 * @property {String} urlAPI
 * @property {Headers} headers
 */

/**
 * 
 * @returns {...RequestHeaders}
 */
export default function useRequestHeaders () {
  const accessToken = useSelector((state) => state.main.accessToken)
  const urlAPI = useSelector((state) => state.main.urlAPI)

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${accessToken}`);

  return {
    urlAPI,
    headers
  }
}