import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../components/Card';
import CardCreche from '../../components/CardCreche';
import api from '../../services/api';
import { Container } from './styles';

export interface Creche {
    id: number;
    name: string;
    bairro: number;
    limite: number;
}

const CrecheList: React.FC = () => {
    const [usuario, setUsuario] = useState<Person>();
    const [creche, setCreche] = useState<Creche[] | any[]>([]);

    const carregarPessoas = useEffect(() => {
        async function loadCreche() {
            const response = await api.get('/creche')

            setCreche(response.data);
        }
        buscaUsuario();
        loadCreche();
    }, []);

    const buscaUsuario = async () => {
        const idUsuario = localStorage.getItem("idUsuario");
        const response = await api.get(`/person/${idUsuario}`);
        setUsuario(response.data);
    };

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

    function verifydelete(person: Person) {
        let personlist = [...creche]
        let index = personlist.indexOf(person);
        personlist.splice(index, 1);
        setCreche(personlist);
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
                    {creche.map((creche: Creche) => {
                        return <CardCreche onDelete={verifydelete} key={creche.id} creche={creche} />
                    })}
                </main>
            </Container>
        </motion.div>

    );
}

export default CrecheList;