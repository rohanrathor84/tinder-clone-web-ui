import axiosClient from "./axiosClient";

export function getCards() {
  return axiosClient.get("/cards");
}
