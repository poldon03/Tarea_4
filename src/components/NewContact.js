import React from 'react';
import '../App.css';
import { insertContact } from '../services/ContactService'

class NewContact extends React.Component {
     state = {
          nombreInput: '',
          apellidoInput: '',
          telefonoInput: ''
     }
     clearInputs = () => {
          this.setState({ nombreInput: '', apellidoInput: '', telefonoInput: '' });
     }

     insertUser = async () => {
          const obj = {
               nombre: this.state.nombreInput,
               apellido: this.state.apellidoInput,
               telefono: this.state.telefonoInput
          }
          await insertContact(obj)
          alert('Usuario Insertado Correctamente!');
          this.props.reloadData();
          this.clearInputs();
     }

     render() {
          return (
               <div id="new-contact-container">
                    <h3 style={{ textAlign: 'center' }}>Guardar Contacto</h3>
                    <div id="new-contact">
                         <div>
                              <label>Nombres</label>
                              <input
                                   type="text"
                                   id="input-nombre"
                                   value={this.state.nombreInput}
                                   onChange={e => this.setState({ nombreInput: e.currentTarget.value })}
                              />
                         </div>
                         <div>
                              <label>Apellidos</label>
                              <input
                                   type="text"
                                   id="input-apellido"
                                   value={this.state.apellidoInput}
                                   onChange={e => this.setState({ apellidoInput: e.currentTarget.value })}
                              />
                         </div>
                         <div>
                              <label>Telefono</label>
                              <input
                                   type="number"
                                   id="input-telefono"
                                   value={this.state.telefonoInput}
                                   onChange={e => this.setState({ telefonoInput: e.currentTarget.value })}
                              />
                         </div>
                         <button
                              id="button-save-contact"
                              onClick={this.insertUser}
                         >Guardar Contacto</button>
                    </div>
               </div>
          );
     }
}

export default NewContact;
