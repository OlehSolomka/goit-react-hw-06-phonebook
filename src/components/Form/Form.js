import { useSelector, useDispatch } from "react-redux";
import phonebookActions from "../../redux/phonebook/phonebook-actions";
import "./form.scss";

const Form = () => {
  const dispatch = useDispatch();
  const name = useSelector(({ phonebook: { form } }) => form.name);
  const number = useSelector(({ phonebook: { form } }) => form.number);

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(phonebookActions.submitValue([name, number]));
    dispatch(phonebookActions.setNameValue(""));
    dispatch(phonebookActions.setNumberValue(""));
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
            onChange={(e) =>
              dispatch(phonebookActions.setNameValue(e.target.value))
            }
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
            onChange={(e) =>
              dispatch(phonebookActions.setNumberValue(e.target.value))
            }
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

export default Form;
