import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Card, { Person } from '../../components/Card'

import Header from '../../components/Header'

import api from '../../services/api'




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
        <Header title="Lista de Pessoas Cadastradas" adress="/person" btnmessage="adicionar pessoa" />
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