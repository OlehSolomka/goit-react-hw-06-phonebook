import "./styles/base.scss";
import { connect } from "react-redux";
import phonebookActions from "./redux/phonebook/phonebook-actions";
import Section from "./components/Section";
import Form from "./components/Form";
import Contactlist from "./components/Contactlist";
import Filter from "./components/Filter";

const App = ({ contacts, onDelete, filterQuery }) => {
  const getVIsibleContacts = () => {
    const normalizedFilter = filterQuery.toLowerCase();

    return contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredItems = getVIsibleContacts();

  return (
    <div className="root">
      <h1 className="header">Phonebook</h1>
      <Form />
      <Section title={"Contacts"}>
        <Filter />
        <Contactlist contacts={filteredItems} onDelete={onDelete} />
      </Section>
    </div>
  );
};

const mapStateToProps = ({ phonebook: { contacts, filter } }) => ({
  contacts,
  filterQuery: filter.query,
});
const mapDispatchToProps = (dispatch) => ({
  onDelete: (name) => dispatch(phonebookActions.deleteValue(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
