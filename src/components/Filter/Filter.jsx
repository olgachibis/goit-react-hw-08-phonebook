import { useDispatch, useSelector } from 'react-redux';
import {
  updateFilter,
  filterContacts,
  resetFilterContacts,
} from 'redux/contacts/slice';
import { getContacts } from '../../redux/contacts/selectors';
import css from './Filter.module.css';

const Filter = function () {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleFilterChange = e => {
    dispatch(resetFilterContacts());
    const { value: filterContact } = e.target;
    dispatch(updateFilter(filterContact.toUpperCase()));
    dispatch(filterContacts(contacts));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;