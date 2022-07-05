import { InputLabel, MenuItem, Select } from '@material-ui/core';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import CardCrianca from '../../components/CardCrianca';
import api from '../../services/api';
import { Creche } from '../CrecheList';
import { Crianca } from '../PersonForm/crianca';
import { Container } from './styles';

const Relatorio: React.FC = () => {
    const [creche, setCreche] = useState<Creche>();
    const [crianca, setCrianca] = useState<Crianca[] | any[]>([]);
    const [listCreche, setListCreche] = useState<Creche[] | any[]>([]);
    const [idCreche, setIdCreche] = React.useState(0);
    const [criancaFilter, setCriancaFilter] = useState<Crianca[] | any[]>([]);

    const carregaCreche = useEffect(() => {
        async function buscarCrianca() {
            const response = await api.get('/crianca')
            setCrianca(response.data);
        }
        buscaCreche();
        buscarCrianca();
    }, []);

    const buscaCreche = async () => {
        await api.get('/creche').then((response) => {
            selecionaCreche(response.data[0].id, response.data);
            setListCreche(response.data);
        });

    };

    function selecionaCreche(id: number, lista: Creche[]) {
        setIdCreche(id);
        setCreche(lista.find((c: Creche) => c.id == id));

        setCriancaFilter(crianca.filter((cri: Crianca) => cri.id_creche == id));
    }

    function getVagasOcupadas() {
        if (creche) {
            let alunosCreche = crianca.filter((cri: Crianca) => cri.id_creche == creche.id);
            return alunosCreche.length;
        }
        return 0;
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
                {carregaCreche}
                <div className="header">
                    <div style={{ width: `30%` }}>
                        <InputLabel id="demo-simple-select-label">Creche</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={2}
                            label="Creche"
                            onChange={(event) => selecionaCreche(event.target.value as number, listCreche)}
                        >
                            {listCreche.map((creche: Creche) => {
                                return <MenuItem value={creche.id}>{creche.name}</MenuItem>
                            })}
                        </Select>

                    </div>
                    <h2>Vagas ocupadas: {getVagasOcupadas()}</h2> <h2>Vagas Disponiveis: {creche?.limite}</h2>

                </div>
                <main>
                    {criancaFilter.map((person: Crianca) => {
                        return <CardCrianca crianca={person} key={person.id} />
                    })}
                </main>
            </Container>
        </motion.div>
    );
}

export default Relatorio;