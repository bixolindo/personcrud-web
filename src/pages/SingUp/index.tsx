import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import { motion } from 'framer-motion';
import React, { FormEvent, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage';
import placeholder from "../../img/pl-profile.jpeg";
import api from '../../services/api';
import { Container } from './style';

const SingUp: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState(0);

    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);


    function addPerson(e: FormEvent) {
        e.preventDefault();
        api.post("person", {
            name,
            password,
            type,
        }).then(async (person: any) => {
            const message: AlertMessageProps = {
                message: 'Pessoa cadastrada com sucesso',
                open: true,
                type: 'success'
            }

            showAlertMessage(message)
            history.push('/');
        }).catch(() => {
            const message: AlertMessageProps = {
                message: 'Erro ao adicionar pessoa',
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
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        setType(+event.target.value);
    };

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
                        <div className="radio-camp">
                            <Radio
                                checked={selectedValue === '0'}
                                onChange={handleChange}
                                value="0"
                                name="administrador"
                                inputProps={{ 'aria-label': '0' }}
                            />
                            <label htmlFor="administrador">Administrador</label>
                            <Radio
                                checked={selectedValue === '1'}
                                onChange={handleChange}
                                value="1"
                                name="diretor"
                                inputProps={{ 'aria-label': '1' }}
                            />
                            <label htmlFor="diretor">Diretor</label>
                            <Radio
                                checked={selectedValue === '2'}
                                onChange={handleChange}
                                value="2"
                                name="pais"
                                inputProps={{ 'aria-label': '2' }}
                            />
                            <label htmlFor="pais">Pais</label>
                        </div>

                        <div className="input-group actions">
                            <Link to="/" className="btncancel">Voltar</Link>
                            <button className="btnsave" type="submit">Cadastrar</button>
                        </div>
                    </form>

                </div>
                {alertMessageProps === undefined ? <div></div> : <AlertMessage open={alertMessageProps.open} type={alertMessageProps.type} message={alertMessageProps.message} />}
            </Container>
        </motion.div>
    );
}

export default SingUp;