import "../css/PaginaPrincipal.css";
import { Link} from "react-router-dom";
import { useEffect, useState } from "react";
function PaginaPrincipal() {
  const [clients, setClients] = useState();
  const [opportunities, setOportunities] = useState();
  const [borrado, setBorrado] = useState()

  useEffect(() => {
    fetch("http://localhost:8080/ClientOpp/Clients")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClients(data);
      });
  }, borrado);

  useEffect(() => {
    fetch("http://localhost:8080/ClientOpp/Opportunities")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setOportunities(data);
      });
  }, borrado);
  function deleteCli(idClientOpp){
    fetch(`http://localhost:8080/ClientOpp/${idClientOpp}/delete`, {
      method: "POST",
      }).then(() => {
        
        setBorrado()
        alert("CliOpp Deleted")
    });
  }
  return (
    <div>
            <Link className="linkbar" to="/">
              <button>Login</button>
            </Link>
      <div id="Home">
      <h2>Clients</h2>
        <div className="ListaCliOpp CliOppContent">          
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody className="tablacliop">
              {clients?.map((client) => (
                <tr key={client.idClientOpp}>
                  <td>{client.idClientOpp}</td>
                  <td>{client.name}</td>
                  <td>{client.lastname}</td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                  <td>
                    <Link to={`/ClientAdmin/${client.idClientOpp}`}><button id={`adminclientbtn${client.idClientOpp}`}>Admin Client</button></Link>
                  </td>
                  <td><div><button onClick={() => deleteCli(client.idClientOpp)} id={`deletebtn${client.idClientOpp}`}>Delete Client</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          
        </div>
        <h2>Opportunities</h2>
        <div className="ListaCliOpp CliOppContent">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email Address</th>
              </tr>
            </thead>
            <tbody className="tablacliop">
              {opportunities?.map((opportunity) => (
                <tr key={opportunity.idClientOpp}>
                  <td>{opportunity.idClientOpp}</td>
                  <td>{opportunity.name}</td>
                  <td>{opportunity.lastname}</td>
                  <td>{opportunity.phone}</td>
                  <td>{opportunity.email}</td>
                  <td>
                  <Link to={`/ClientAdmin/${opportunity.idClientOpp}`}><button id={`adminclientbtn${opportunity.idClientOpp}`}>Admin Opportunity</button></Link>                    
                  </td>
                  <td><div><button id={`deletebtn${opportunity.idClientOpp}`} onClick={() => deleteCli(opportunity.idClientOpp)}>Delete Oportunity</button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div><Link to={`/NewCliOpp`}><button id="createCliOpp">Create new Oportunity</button></Link></div>

      
    </div>
  );
}
export default PaginaPrincipal;
