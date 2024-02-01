import api from "./http-common";



export async function getCategoria() {
  try {
    const response = await api.get('/category');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  }
}

export async function postCategoria(categoria) {
  try {
    const response = await api.post('/category',{name: categoria});
    return response.data;
  } catch (error) {
    console.error('Erro ao criar categoria:', error);
  }
}

export async function getListas() {
  try {
    const response = await api.get('/myList');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar listas:', error);
  }
}

export async function getLista(id) {
  try {
    const response = await api.get(`/myList/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar listas:', error);
  }
}

export async function createList(listdata) {
  try {
    const response = await api.post('/myList', listdata );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar listas:', error);
  }
}

export async function getItens(id) {
  try {
    const response = await api.get(`/myList/${id}/item`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar itens:', error);
  }
}

export async function createItem(id,itemData) {
  try {
    const response = await api.post(`/myList/${id}/item`, itemData );
    return response.data;
  } catch (error) {
    console.error('Erro ao criar item:', error);
  }
}

export async function deleteItem(idList, idItem) {
  try {
    const response = await api.delete(`/myList/${idList}/item/${idItem}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir item:', error);
  }
}

export async function deleteList(idList) {
  try {
    const response = await api.delete(`/myList/${idList}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao excluir item:', error);
  }
}

export async function updateList(id, listdata) {
  try {
    const response = await api.post(`/myList/${id}`, listdata );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar listas:', error);
  }
}