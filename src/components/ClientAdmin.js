import '../css/ClientAdmin.css';
import { useEffect, useState } from 'react';
import {  Link, useParams } from 'react-router-dom';
function ClientAdmin() {
    const {idClientOpp}=useParams();
    const [contacts,setContacts]=useState();
    const [client,setCLient]=useState();

     useEffect(() => {
         fetch(`http://localhost:8080/ClientOpp/${idClientOpp}/contacts`)
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setContacts(data);
          });
      }, []);
      
      useEffect(() => {
        fetch(`http://localhost:8080/ClientOpp/${idClientOpp}`)
         .then((res) => {
           return res.json();
         })
         .then((data) => {
            setCLient(data);
         });
     }, []);

     if (!client) {
        return <h1>Loading...</h1>;
      }
     



  return (
    <div>
            <h2>{client?.name} {client?.lastname} Contacts </h2>
        <div className="ListaCliOpp CliOppContent">          
        <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Via</th>
                <th>Details</th>
                <th>Date</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody className="tablacliop">
              {contacts?.map((contact) => (
                <tr key={contact.idContact}>
                  <td>{contact.idContact}</td>
                  <td>{contact.via}</td>
                  <td>{contact.details}</td>
                  <td>{contact.date}</td>
                  <td>{String(contact.result)}</td>
                  <td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div><Link to={`/NewContact/${idClientOpp}`}><button id="createcontactbtn">Create new Contact</button></Link></div>
        </div>
          </div>
  );
}
export default ClientAdmin;