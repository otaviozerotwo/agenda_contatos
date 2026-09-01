import { getUsers } from './api';
import cardRender from './cardRender';
import { setMessage } from './utils';

const mainContainer = document.getElementById('mainContainer');
const emptyListMessageElement = document.getElementById('emptyListMessage');

const init = async () => {
  try {
    const users = await getUsers();

    if (!users.length) {
      setMessage(emptyListMessageElement, 'Nenhum contato encontrado.');
      return;
    }

    setMessage(emptyListMessageElement, '');
    const contacts = await cardRender(users);

    if (!contacts) {
      setMessage(emptyListMessageElement, 'Nenhum contato encontrado.');
      return;
    }

    mainContainer.innerHTML = contacts;
  } catch (err) {
    console.error(err);
    setMessage(emptyListMessageElement, 'Erro ao buscar dados. Tente novamente mais tarde.');
  }
}

init();