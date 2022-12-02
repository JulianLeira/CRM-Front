import "../css/ClientAdmin.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
function NewContact() {
  const navigation = useNavigate();
  const { idClientOpp } = useParams();
  const [contact, setContact] = useState({
    via: "",
    details: "",
    date: "",
    result: false,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  function handleSubmit(evt) {
    evt.preventDefault();
    fetch(`http://localhost:8080/ClientOpp/${idClientOpp}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        via: contact.via,
        details: contact.details,
        date: contact.date,
        result: contact.result,
      }),
    }).then((data) => {
      navigation("/paginaPrincipal");
    });
  }

  function handleChange(evt) {
    const target = evt.target;
    const name = target.name;
    if (target.name === "result") {
      if (target.value === "on") {
        target.value = true;
      }
    }
    const value = target.value;
    const newContacts = {
      ...contact,
      [name]: value,
    };

    setContact(newContacts);
  }

  return (
    <div>
      <form className="Login" onSubmit={handleSubmit}>
        <h2>Create new Opportunity</h2>
        <ul>
          <li>
            <label className="signlabel">Via:</label>
            <br></br>
            <input
              name="via"
              onChange={handleChange}
              className="signinput"
              placeholder="Via*"
              type="text"
              id="Via"
              required
            />
          </li>
          <br></br>
          <li>
            <label className="signlabel">Details:</label>
            <br></br>
            <input
              name="details"
              onChange={handleChange}
              className="signinput"
              placeholder="Details"
              type="text"
              id="Details"
              required
            />
          </li>
          <br></br>
          <li>
            <label className="signlabel">Result:</label>
            <br></br>
            <input
              name="result"
              type="checkbox"
              id="Result"
              placeholder="Result"
              onChange={handleChange}
            ></input>
          </li>
          <br></br>
          <li>
            <label className="signlabel">Date:</label>
            <br></br>
            <input name="date" type="Date" onChange={handleChange} id="Date" required></input>
          </li>
          <br></br>
          <br></br>
          <br></br>
          <button className="signbutton" type="submit">
            Create
          </button>
        </ul>
      </form>
    </div>
  );
}

export default NewContact;
