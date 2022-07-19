import React from 'react';
import '../App.css';
import * as ContactService from '../services/ContactService';



class ListContact extends React.Component {
     state = {
          data: undefined
     };

     getData = async () => {
          const allContacts = await ContactService.getAllContacts();
          this.setState({ data: allContacts });
     }

     componentDidMount = async () => {
          this.getData();
     }

     render() {

          return (
               <div id="list-contacts-container">
                    <h3>Lista de Contactos</h3>
                    <div id="list-contact">
                         {this.state.data &&
                              this.state.data.map((contact, index) => (
                                   <div id="contact-card" key={index}>
                                        <label>{`${contact.nombre} ${contact.apellido}`}</label>
                                        <label>{contact.telefono}</label>
                                   </div>
                              ))}
                    </div>
               </div>
          );
     }
}

export default ListContact;
