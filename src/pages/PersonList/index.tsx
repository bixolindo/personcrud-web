import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Autenticacao from '../../autenticacao/autenticacao';
import Card, { Person } from '../../components/Card';
import api from '../../services/api';
import { Crianca } from '../PersonForm/crianca';
import { Container } from './styles';

const PersonList: React.FC = () => {

  const [usuario, setUsuario] = useState<Person>();
  const [crianca, setCrianca] = useState<Crianca[] | any[]>([]);

  const carregarPessoas = useEffect(() => {
    async function loadCrianca() {
      const response = await api.get('/crianca')
  
      setCrianca(response.data);
    }
    buscaUsuario();
    loadCrianca();
  }, []);

  const buscaUsuario = async () => {
    const idUsuario = localStorage.getItem("idUsuario");
    const response = await api.get(`/person/${idUsuario}`);
    setUsuario(response.data);
  };

  function verifydelete(person: Person) {
    let personlist = [...crianca]
    let index = personlist.indexOf(person);
    personlist.splice(index, 1);
    setCrianca(personlist);
  }


  return (
    <>
      <Container>
        {carregarPessoas}
        <div className="header">
          <h1>Lista de pessoas</h1>
          <Link to="/person" className="addbtn"><i className="fa fa-user-plus"></i><span>Cadastrar Criança</span></Link>
          {usuario && usuario.type == 0 ? <Link to="/creche" className="addbtn"><i className="fa fa-plus"></i><span>Adicionar Creche</span></Link> : <div></div>}
          
        </div>
        <main>
          {crianca.map((person: Crianca) => {
            return <Card onDelete={verifydelete} key={person.id} crianca={person} />
          })}
        </main>
      </Container>
    </>
  );
}

export default PersonList;