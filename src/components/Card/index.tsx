import React from 'react';

import { Container } from './styles';

export interface Person {
    name: string;
    sex: number;
    age: number;
    address: string;
}

interface PersonItemProps{
    person: Person;
}


const Card: React.FC<PersonItemProps> = ({person}) => {
  return (
    <Container>
        <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team">
                    <div className="picture">
                        <img src="https://picsum.photos/130/130?image=1027" alt="" className="img-fluid"/>
                    </div>
                    <div className="team-content">
                        <h3 className="name">{person.name}</h3>
                        <h4 className="title">{person.sex == 0 ? "M" : "F"}</h4>
                        <h4 className="title">{person.age} anos</h4>
                        <h4 className="title">Endereço: {person.address}</h4>
                    </div>
                    <ul className="social">
                        <li>
                            <a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-facebook" aria-hidden="true"></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-twitter" aria-hidden="true"></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-google-plus" aria-hidden="true"></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/collection/XdWJOQ/" className="fa fa-linkedin" aria-hidden="true"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Card;