import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { getContacts, getСontactsFilter } from '../../redux/contacts/selectors';
import { resetFilterContacts } from 'redux/contacts/slice';
import css from './ContactList.module.css';

const ContactList = function () {
const dispatch = useDispatch();
const contacts = useSelector(getContacts);

  const filterContactArray = useSelector(getСontactsFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = el => {
    dispatch(resetFilterContacts());
    dispatch(deleteContact(el.target.dataset.id));
  };

  const resultArray =
    filterContactArray.length > 0 ? filterContactArray : contacts;

  return (
    <ul className={css.list}>
      {resultArray.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.name}>
            {name}: {number}
          </p>
          <button
            data-id={id}
            onClick={handleDeleteContact}
            className={css.button}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;