import "./filter.scss";
import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

const Filter = () => {
  const dispatch = useDispatch();
  const query = useSelector(({ phonebook: { filter } }) => filter.query);

  return (
    <>
      <input
        value={query}
        type="text"
        name="filter"
        onChange={(e) =>
          dispatch(phonebookActions.setFilterQuery(e.target.value))
        }
      ></input>
    </>
  );
};

export default Filter;
