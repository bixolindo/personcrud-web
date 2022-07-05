import React from 'react';
import { Link } from 'react-router-dom';
import { Creche } from '../../pages/CrecheList';
import api from '../../services/api';
import { Container } from './styles';

export interface Person {
    id: number;
    name: string;
    type: number;
    namepais: string;
    rg: string;
    password: string;
}

interface PersonItemProps {
    creche: Creche;
    onDelete: Function;
}

const style = {
    position: 'absolute' as 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,

};

const estiloModal = {
    width: `50%`,
    height: `50%`,
    position: 'absolute' as 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    backgroundColor: `#ddd`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
}

const Card: React.FC<PersonItemProps> = ({ onDelete, creche }) => {

    function deleteCreche(creche: Creche) {
        api.delete(`creche/${creche.id}`).then(async (person: any) => {
            onDelete(creche);
        });
    }


    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">

                            <div className="team-content">
                                <h3 className="name">{creche.name}</h3>
                                <h4 className="title">{creche.bairro}</h4>
                                <h4 className="title">{creche.limite}</h4>

                            </div>
                            <ul className="social">
                                <li>
                                    <Link to="/creche" className="fa fa-pencil"></Link>
                                </li>
                                <li>
                                    <button onClick={() => deleteCreche(creche)} className="fa fa-trash" aria-hidden="true"></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Card;
