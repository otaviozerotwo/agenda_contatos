const API_URL = import.meta.env.VITE_API_URL;

const getUsers = async () => {
  const response = await fetch(API_URL);
  
  if (!response.ok) {
    throw new Error('Falha na requisição da API');
  }
  
  return await response.json();
}

export { getUsers };