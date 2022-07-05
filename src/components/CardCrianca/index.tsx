import React from 'react';
import { Crianca } from '../../pages/PersonForm/crianca';
import { Container } from './styles';

interface CriancaItemProps {
    crianca: Crianca
}

const style = {
    position: 'absolute' as 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,

};

const CardCrianca: React.FC<CriancaItemProps> = ({ crianca }) => {


    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <div className="team-content">
                                <h3 className="name">{crianca.name}</h3>
                                <h4 className="title">{crianca.endereco}</h4>
                                <h4 className="title">{crianca.name_pais}</h4>

                            </div>
                            <ul className="social">

                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default CardCrianca;
