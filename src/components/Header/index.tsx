import React from 'react';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import { Container } from './styles';


interface HeaderProps {
  title: string;
}

interface LinkTabProps {
  label: string;
  href: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      to={props.href}
      component={Link}


      {...props}
    />
  );
}

function logout() {
  localStorage.removeItem('idUsuario');
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const [pagina, setPagina] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, value: number) => {
    setPagina(value);
  };

  return (
    <Container>
      {localStorage.getItem('idUsuario') != null ?
        <>
          <Tabs value={pagina} onChange={handleChange} aria-label="nav tabs example">
            <LinkTab label="Lista Criança" href="/home" />
            <LinkTab label="Lista Creche" href="/crecheList" />
            <LinkTab label="Relatorio" href="/relatorio" />
          </Tabs> <Link to="/" ><button className="btncancel" onClick={logout}>Sair</button></Link></>

        :
        <div></div>
      }
    </Container>
  )
}

export default Header;