import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import { motion } from 'framer-motion';
import React, { FormEvent, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Autenticacao  from '../../autenticacao/autenticacao';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage';
import placeholder from "../../img/pl-profile.jpeg";
import api from '../../services/api';
import { Container } from './style';

const Login: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState(0);

    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);


    function addPerson(e: FormEvent) {
        e.preventDefault();
        api.post("person/autenticar", {
            name,
            password,
        }).then(async (person: any) => {
            localStorage.setItem('idUsuario', person.data.id);
            console.log(person);
            
            history.push('/home');
        }).catch(() => {
            const message: AlertMessageProps = {
                message: 'Credenciais incorrestas',
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

    const [selectedValue, setSelectedValue] = React.useState('');


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
                <h1>Adicionar Pessoa</h1>
                <div className="menu">

                    <form className="form" onSubmit={addPerson}>

                        <div className="name-camp">
                            <TextField className="text-input" id="name" label="Nome" onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="name-camp">
                            <TextField className="text-input" type="password" name="Password" id="Password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>

                        <div className="input-group actions">
                            <button className="btncancel" type="submit">Entrar</button>
                            <Link to="/cadastro" className="btnsave"  >Cadastrar</Link>
                        </div>
                    </form>

                </div>
                {alertMessageProps === undefined ? <div></div> : <AlertMessage open={alertMessageProps.open} type={alertMessageProps.type} message={alertMessageProps.message} />}
            </Container>
        </motion.div>
    );
}

export default Login;