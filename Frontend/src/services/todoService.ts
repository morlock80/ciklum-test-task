import config from "../config.json";
import http from "./httpService";

async function loadToDos() {
  return await http.get(config.apiEndpoint);
}

async function createNewToDo(todo: any) {
  return await http.post(config.apiEndpoint, todo);
}

async function updateToDo(id: any, dto: any) {
  return await http.put(config.apiEndpoint + `/${id}`, dto);
}

async function deleteToDo(id: any) {
  return await http.delete(config.apiEndpoint + `/${id}`);
}

export default {
    loadToDos,
    createNewToDo,
    updateToDo,
    deleteToDo
};
