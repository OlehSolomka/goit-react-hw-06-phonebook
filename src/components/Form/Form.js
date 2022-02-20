import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
import "./form.scss";

const Form = ({ name , number , setName, setNumber, onSubmit }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit([name, number]);
    setName("");
    setNumber("");
  };

  return (
    <div className="form">
      <form onSubmit={handlerSubmit}>
        <label className="form__label">
          Name:
          <input
            placeholder="Enter your name"
            value={name}
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className="form__label">
          Tel:
          <input
            placeholder="enter your phone number"
            value={number}
            type="tel"
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ phonebook: { form } }) => ({
  name: form.name,
  number: form.number,
});
const mapDispatchToProps = (dispatch) => ({
  setName: (name) => dispatch(phonebookActions.setNameValue(name)),
  setNumber: (number) => dispatch(phonebookActions.setNumberValue(number)),
  onSubmit: (data) => dispatch(phonebookActions.submitValue(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
