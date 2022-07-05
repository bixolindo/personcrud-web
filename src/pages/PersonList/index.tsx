import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card, { Person } from '../../components/Card';
import api from '../../services/api';
import { Creche } from '../CrecheList';
import { Crianca } from '../PersonForm/crianca';
import { Container } from './styles';

const PersonList: React.FC = () => {
  const [usuario, setUsuario] = useState<Person>();
  const [crianca, setCrianca] = useState<Crianca[] | any[]>([]);
  const [creche, setCreche] = useState<Creche[] | any[]>([]);

  const carregarPessoas = useEffect(() => {
    async function loadCrianca() {
      const response = await api.get('/crianca')

      setCrianca(response.data);
    }
    buscaUsuario();
    buscaCreche();
    loadCrianca();
  }, []);

  const buscaUsuario = async () => {
    const idUsuario = localStorage.getItem("idUsuario");
    const response = await api.get(`/person/${idUsuario}`);
    setUsuario(response.data);
  };

  const buscaCreche = async () => {
    const response = await api.get('/creche')
    setCreche(response.data.filter((c: Creche) => c.limite > 0));
  };

  function verifydelete(person: Person) {
    let personlist = [...crianca]
    let index = personlist.indexOf(person);
    personlist.splice(index, 1);
    setCrianca(personlist);
  }

  const containerVariants = {
    hidden: {
      opacity: 0,
      transform: "translate(50%, 0)",
    },
    visible: {
      opacity: 1,
      transform: "translate(0%, 0)",
    },
    exit: {
      opacity: 0,
      transform: "translate(-50%, 0)"
    }
  }

  return (
    <motion.div variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Container>
        {carregarPessoas}
        <div className="header">

          {usuario && usuario.type != 1 ? <Link to="/person" className="addbtn"><i className="fa fa-user-plus"></i><span>Cadastrar Criança</span></Link> : <div></div>}
          {usuario && usuario.type == 0 ? <Link to="/creche" className="addbtn"><i className="fa fa-plus"></i><span>Adicionar Creche</span></Link> : <div></div>}

        </div>
        <main>
          {crianca.map((person: Crianca) => {
            return <Card onDelete={verifydelete} key={person.id} crianca={person} listCreche={creche} />
          })}
        </main>
      </Container>
    </motion.div>
  );
}

export default PersonList;