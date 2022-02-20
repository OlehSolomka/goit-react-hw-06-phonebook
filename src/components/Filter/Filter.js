import "./filter.scss";
import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";

const Filter = ({ query, setQuery }) => {
  return (
    <>
      <input
        value={query}
        type="text"
        name="filter"
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </>
  );
};

const mapStateToProps = ({ phonebook: { filter } }) => ({
  query: filter.query,
  filteredItems: filter.filteredItems,
});

const mapDispatchToProps = (dispatch) => ({
  setQuery: (query) => dispatch(phonebookActions.setFilterQuery(query)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
