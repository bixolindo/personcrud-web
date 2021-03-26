import React, {useState, FormEvent, useEffect} from 'react';

import { Container, Header, MenuOverlay } from './styles';
import TextField from '@material-ui/core/TextField';


import Card, { Person } from '../Card'

import api from '../../services/api'
import { Radio } from '@material-ui/core';

const PersonList: React.FC = () => {
  
  const [persons,setPersons] = useState([]);
  const [name, setName] = useState("");
  const [sex , setSex] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function loadPersons(){
      const response = await api.get('/person')

      setPersons(response.data);
    }
    loadPersons();
  })

  function addPerson(e: FormEvent){
    e.preventDefault();
    api.post("person",{
      name,
      sex : Number(sex),
      age : Number(age),
      address
    }).then(() =>{
      alert('Pessoa cadastrada com sucesso');
    }).catch(() =>{
      alert('Erro ao Adicionar pessoa');
    })
  }

  const Menu = {
    open() : any {
      document.querySelector(".menu-overlay")?.classList.add("active");
    },
    close(): any {
      document.querySelector(".menu-overlay")?.classList.remove("active");
    }
  }

 
    const [selectedValue, setSelectedValue] = React.useState('');    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        setSex(event.target.value)
      };

  return (
    <>
    <Container>
        <MenuOverlay className="menu-overlay">
        <div className="menu">
          <div className="form">
            <h2>Adicionar Pessoa</h2>
            <form onSubmit={addPerson}>
              <div className="input-group">
                <TextField  className="text-input" id="name" label="Nome" onChange={(e) =>{setName(e.target.value)}}/>
              </div>
              <div className="input-group">
                <Radio
                  checked={selectedValue === '0'}
                  onChange={handleChange}
                  value="0"
                  name="Male"
                  inputProps={{ 'aria-label': '0' }}
                />
                  <label htmlFor="male">Masculino</label>
                <Radio
                  checked={selectedValue === '1'}
                  onChange={handleChange}
                  value="1"
                  name="Female"
                  inputProps={{ 'aria-label': '1' }}
                />
                <label htmlFor="female">Feminino</label>
              </div>
              <div className="input-group">
                <TextField className="text-input" type="number" name="Age" id="Age" placeholder="Idade" onChange={(e) =>{setAge(e.target.value)}}/>
              </div>
              <div className="input-group">
                <TextField className="text-input" id="Address" label="Address" onChange={(e) =>{setAddress(e.target.value)}}/>
              </div>
              <div className="input-group actions">
                <a href="#" onClick={() => {Menu.close()}}>Cancelar</a>
                <button type="submit" onClick={() => {Menu.close()}}>Salvar</button>
              </div>
            </form>
          </div>
        </div>
        </MenuOverlay>
        <Header>
          <h1>Lista de Pessoas Cadastradas </h1>
          <button className="fa fa-user-plus" onClick={() => {Menu.open()}} ><span>Adicionar usuario</span></button>
        </Header>
        <main>
          {persons.map((person:Person)=>{
            return <Card key={person.age} person={person} />
          })}
        </main>
      </Container>
    </>
  );
}

export default PersonList;