import React, { useState, FormEvent, useEffect } from 'react';

import { Container, Header } from './styles';

import {Link} from 'react-router-dom'

import Card, { Person } from '../Card'

import api from '../../services/api'




const PersonList: React.FC = () => {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    async function loadPersons() {
      const response = await api.get('/person')

      setPersons(response.data);
    }
    loadPersons();
  })


  return (
    <>
      <Container>
        <Header>
          <h1>Lista de Pessoas Cadastradas </h1>
          <Link to='/person' className="fa fa-user-plus" ><span>Adicionar usuario</span></Link>
        </Header>
        <main>
          {persons.map((person: Person) => {
            return <Card key={person.age} person={person} />
          })}
        </main>
       
      </Container>
    </>
  );
}

export default PersonList;