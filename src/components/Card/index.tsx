import React from 'react';

import {Link} from 'react-router-dom';

import { Container } from './styles';
import api from '../../services/api'
import defaultimg from '../../img/default_mk1.png'

export interface Person {
    id: number;
    name: string;
    sex: number;
    age: number;
    address: string;
}

interface PersonItemProps{
    person: Person;
    onDelete: Function;
}


const Card: React.FC<PersonItemProps> = ({person,onDelete}) => {
    function deletePerson( person : Person){
        api.delete(`/person/${person.id}`).then(()=>{
            onDelete(person);
        });
    }
    
  return (
    <Container>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team">
                    <div className="picture">
                        <img src={defaultimg} alt="" className="img-fluid"/>
                    </div>
                    <div className="team-content">
                        <h3 className="name">{person.name}</h3>
                        <h4 className="title">{person.sex == 0 ? "M" : "F"}</h4>
                        <h4 className="title">{person.age} anos</h4>
                        <h4 className="title">Endereço: {person.address}</h4>
                    </div>
                    <ul className="social">
                        <li>
                            <Link to={`/person/${person.id}`} ><button className="fa fa-pencil" aria-hidden="true"></button></Link>
                        </li>
                        <li>
                            <button onClick={() => deletePerson(person)} className="fa fa-trash" aria-hidden="true"></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Card;