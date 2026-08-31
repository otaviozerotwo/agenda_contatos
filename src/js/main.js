import renderCard from './renderCard';

const fetchUsers = async () => {
  const listCards = await renderCard();
  
  document.getElementById('mainContainer').innerHTML = listCards;
}

fetchUsers();