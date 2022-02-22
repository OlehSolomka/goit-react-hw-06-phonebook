import "./styles/base.scss";
import { useSelector, useDispatch } from "react-redux";
import { deleteValue } from "./redux/phonebook/contactSlice";
import Section from "./components/Section";
import Form from "./components/Form";
import Contactlist from "./components/Contactlist";
import Filter from "./components/Filter";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(({ phonebook }) => phonebook.contacts);
  const filterQuery = useSelector(({ phonebook }) => phonebook.filter.query);

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
        <Contactlist
          contacts={filteredItems}
          onDelete={(name) => dispatch(deleteValue(name))}
        />
      </Section>
    </div>
  );
};

export default App;
