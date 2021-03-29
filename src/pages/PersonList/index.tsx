import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Card, { Person } from '../../components/Card'

import Header from '../../components/Header'

import api from '../../services/api'
import { Link } from 'react-router-dom';




const PersonList: React.FC = () => {

  const [persons, setPersons] = useState<Person[] | any[]>([]);

  const carregarPessoas = useEffect(() => {
    async function loadPersons() {
      const response = await api.get('/person')

      setPersons(response.data);
    }
    loadPersons();
  },[]);

  function verifydelete(person : Person){
    let personlist = [...persons]
    let index = personlist.indexOf(person);
    personlist.splice(index, 1);
    setPersons(personlist);
  }


  return (
    <>
      <Container>
        {carregarPessoas}
        <div className="header">
          <h1>Lista de pessoas</h1>
          <Link to="/person" className="addbtn"><i className="fa fa-user-plus"></i><span>Adicionar Pessoas</span></Link>
        </div>
        <main>
          {persons.map((person: Person) => {
            return <Card onDelete={verifydelete} key={person.id} person={person} />
          })}
        </main>
      </Container>
    </>
  );
}

export default PersonList;