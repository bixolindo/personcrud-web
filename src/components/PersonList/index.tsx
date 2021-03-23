import React from 'react';

import { Container, Header, MenuOverlay } from './styles';

import Card from '../Card'

const PersonList: React.FC = () => {
  function abrirMenu () {

  }

  return (
    <>
      <MenuOverlay>
        <div className="menu">
          <div className="form">
            <h2>Adicionar Pessoa</h2>
            <form action="">
              <div className="input-group">
                <label htmlFor="Name">Nome:</label>
                <input className="text-input" type="text" name="Name" id="Name" placeholder="Nome"/>
              </div>
              <div className="input-group">
                <input type="radio" id="male" name="gender" value="male" />
                <label htmlFor="male">Masculino</label>
                <input type="radio" id="female" name="gender" value="female" />
                <label htmlFor="female">Feminino</label>
              </div>
              <div className="input-group">
                <label htmlFor="Name">Endereço: </label>
                <input className="text-input" type="text" name="Adress" id="Adress" placeholder="Endereço"/>
              </div>
            </form>
          </div>
        </div>
      </MenuOverlay>
      <Container>
        <Header>
          <h1>Lista de Pessoas Cadastradas </h1>
          <button className="fa fa-user-plus" ><span>Adicionar usuario</span></button>
        </Header>
        <Card />
      </Container>
    </>
  );
}

export default PersonList;