import "../css/ClientAdmin.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function NewCliOpp() {
    const navigation= useNavigate();
  const [cliente, setCliente] = useState({
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  function handleSubmit(evt) {
    evt.preventDefault();
    fetch(`http://localhost:8080/ClientOpp`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: cliente.name,
        lastname: cliente.lastname,
        phone: cliente.phone,
        email: cliente.email
      }),
    }).then(() => {
      navigation("/paginaPrincipal");
    });
  }

  function handleChange(evt) {
    const target = evt.target;
    const name = target.name; 
    const value = target.value;
    const newClientes = {
      ...cliente,
      [name]: value
    };

    setCliente(newClientes);
  }
 

 
  return (
    <div>
      <form className="Login" onSubmit={handleSubmit}>
        <h2>Create new Opportunity</h2>
        <ul>
          <li>
            <label className="signlabel" >
              Name:
            </label>
            <br></br>
            <input
            name="name"
              onChange={handleChange}
              className="signinput"
              placeholder="Name*"
              type="text"
              id="Name"
              required
            />
          </li>
          <br></br>
          <li>
            <label className="signlabel" >
              Last Name:
            </label>
            <br></br>
            <input
            name= "lastname"
              onChange={handleChange}
              className="signinput"
              placeholder="Last Name"
              type="text"
              id="LastName"
              required
            />
          </li>
          <br></br>
          <li>
            <label className="signlabel" >
              Phone:
            </label>
            <br></br>
            <input
            name="phone"
              onChange={handleChange}
              className="signinput"
              placeholder="Phone"
              type="text"
              id="Phone"
              required
            />
          </li>
          <br></br>
          <li>
            <label className="signlabel" >
              Email:
            </label>
            <br></br>
            <input
            name="email"
              onChange={handleChange}
              className="signinput"
              placeholder="Email"
              type="text"
              id="Email"
              required
            />
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
export default NewCliOpp;
