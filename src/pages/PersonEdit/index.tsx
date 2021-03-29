import React, { useState, FormEvent, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage'

import api from '../../services/api'

import {Container} from './styles'
import { Link, useHistory, useParams } from 'react-router-dom';
import { Person } from '../../components/Card';
import { motion } from 'framer-motion'



const PersonEdit: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>()
    const history  = useHistory();
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    
    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);

    const [pessoacerta,setPessoaCerta] = useState<Person | any>({name : "", age: "", sex:"", address: ""})

    const carregarPessoa = useEffect(() => {
        async function loadPersons() {
            console.log(id)
          const response = await api.get(`/person/${id}`)
    
          setPessoaCerta(response.data);
          setName(pessoacerta.name);
          setSex(pessoacerta.sex);
          setAge(pessoacerta.age);
          setAddress(pessoacerta?.address);
        }
        loadPersons();
      },[])
    
    
    

    function addPerson(e: FormEvent) {
        e.preventDefault();
        api.put(`/person/${id}`, {
            name,
            sex: Number(sex),
            age: Number(age),
            address
        }).then(() => {
            const message: AlertMessageProps = {
                message: 'Pessoa editada com sucesso',
                open: true,
                type: 'success'
            }
            showAlertMessage(message)
            history.push('/');
        }).catch(() => {
            const message: AlertMessageProps = {
                message: 'Erro ao editar pessoa',
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
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        setSex(event.target.value)
      };

      const containerVariants = {
        hidden: {
            opacity: 0,
            transform: "translate(100%, 0)",
        },
        visible:{
            opacity: 1,
            transform: "translate(0%, 0)",
        },
        exit:{
            opacity: 0,
            transform: "translate(-50%, 0)"
        }
    }

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <Container>
                {carregarPessoa}
                <h1>Editar Pessoa</h1>
                <div className="menu">
                    <div className="form">
                        <form onSubmit={addPerson}>
                            <div className="img"></div>
                            <div className="name-camp">
                                <TextField className="text-input" id="name" value={name} label="Nome" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="age-camp">
                                <TextField className="text-input" type="number" name="Age" id="Idade" value={age} onChange={(e) => { setAge(e.target.value) }} />
                            </div>
                            <div className="radio-camp">
                                <Radio
                                    checked={selectedValue === '0'}
                                    onChange={handleChange}
                                    value="0"
                                    name="Male"
                                    inputProps={{ 'aria-label': '0' }}
                                />
                                <label htmlFor="male"><i className="fa fa-mars" aria-hidden="true"></i></label>
                                <Radio
                                    checked={selectedValue === '1'}
                                    onChange={handleChange}
                                    value="1"
                                    name="Female"
                                    inputProps={{ 'aria-label': '1' }}
                                />
                                <label htmlFor="female"><i className="fa fa-venus" aria-hidden="true"></i></label>
                            </div>
                            <div className="address-camp">
                                <TextField className="text-input" id="Address" value={address} label="Endereço" onChange={(e) => { setAddress(e.target.value) }} />
                            </div>
                            <div className="input-group actions">
                                <Link to="/" className="btncancel">Cancelar</Link>
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

export default PersonEdit;