import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import { motion } from 'framer-motion';
import React, { FormEvent, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage';
import placeholder from "../../img/pl-profile.jpeg";
import api from '../../services/api';
import { Container } from './styles';

const Creche: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [bairro, setBairro] = useState("");
    const [limite, setLimite] = useState("");

    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);


    function addCreche(e: FormEvent) {
        e.preventDefault();
        api.post("creche", {
            name,
            bairro,
            limite,
        }).then(async (person: any) => {
            const message: AlertMessageProps = {
                message: 'Creche cadastrada com sucesso',
                open: true,
                type: 'success'
            }

            showAlertMessage(message)

        }).catch(() => {
            const message: AlertMessageProps = {
                message: 'Erro ao adicionar Creche',
                open: true,
                type: 'error'
            }
            showAlertMessage(message)
        })
    }


    function showAlertMessage(alertMessage: AlertMessageProps) {
        setAlertMessageProps(alertMessage)
        setTimeout(() => {
            alertMessage.open = false
            setAlertMessageProps({ ...alertMessage })
        }, 1500)
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

    function voltar() {
        
        history.goBack();
    }

    return (
        <motion.div variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                <h1>Adicionar Pessoa</h1>
                <div className="menu">
                    <div className="form">
                        <form onSubmit={addCreche}>

                            <div className="col-12 name-camp">
                                <TextField className="text-input" id="name" label="Nome" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="col-12  age-camp">
                                <TextField className="text-input" type="number" name="Limite" id="Limite" placeholder="Limite" onChange={(e) => { setLimite(e.target.value) }} />
                            </div>

                            <div className="col-12 address-camp">
                                <TextField className="text-input" id="Bairro" label="Bairro" onChange={(e) => { setBairro(e.target.value) }} />
                            </div>
                            <div className="col-12 input-group actions">
                            
                                <button onClick={() => voltar()} className="btncancel"> Cancelar</button>
                                <button className="btnsave" type="submit"> Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
                {alertMessageProps === undefined ? <div></div> : <AlertMessage open={alertMessageProps.open} type={alertMessageProps.type} message={alertMessageProps.message} />}
            </Container>
        </motion.div>
    );
}

export default Creche;