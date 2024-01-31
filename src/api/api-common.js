import api from "./http-common";



export async function getCategoria() {
  try {
    const response = await api.get('/category');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
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

export async function createList(listdata) {
  try {
    const response = await api.post('/myList', listdata );
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar listas:', error);
  }
}