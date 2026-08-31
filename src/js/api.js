const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error('Erro ao buscar dados!');
    }
    
    const users = await response.json();
    return users;

  } catch (err) {
    console.log(err);
  }
}

export { getUsers };