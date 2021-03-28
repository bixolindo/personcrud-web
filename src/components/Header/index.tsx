import React from 'react';

import { Container } from './styles';
import {Link} from 'react-router-dom';


interface HeaderProps{
    title: string;
    adress: string;
    btnmessage: string;
}



const Header: React.FC<HeaderProps> = ({title,adress,btnmessage}) => {
  return (
    <Container>
          <h1>{title}</h1>
          <Link to={adress} className="addbtn"><i className="fa fa-user-plus"></i><span>{btnmessage}</span></Link>
    </Container>
    )
}

export default Header;