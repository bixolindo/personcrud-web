import React, { useState, FormEvent, useEffect } from 'react';
import MuiAlert, { AlertProps, Color } from '@material-ui/lab/Alert';
import { Radio } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage'

import api from '../../services/api'

import {Container} from './styles'



const PersonForm: React.FC = () => {
    const [name, setName] = useState("");
    const [sex, setSex] = useState("");
    const [age, setAge] = useState("");
    const [address, setAddress] = useState("");
    
    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);

    function addPerson(e: FormEvent) {
        e.preventDefault();
        api.post("person", {
            name,
            sex: Number(sex),
            age: Number(age),
            address
        }).then(() => {
            const message: AlertMessageProps = {
                message: 'Pessoa cadastrada com sucesso',
                open: true,
                type: 'success'
            }
            showAlertMessage(message)
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
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
        setSex(event.target.value)
      };

    return (
        <Container>
            <div className="menu">
                <div className="form">
                    <h2>Adicionar Pessoa</h2>
                    <form onSubmit={addPerson}>
                        <div className="input-group">
                            <TextField className="text-input" id="name" label="Nome" onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <div className="input-group">
                            <Radio
                                checked={selectedValue === '0'}
                                onChange={handleChange}
                                value="0"
                                name="Male"
                                inputProps={{ 'aria-label': '0' }}
                            />
                            <label htmlFor="male">Masculino</label>
                            <Radio
                                checked={selectedValue === '1'}
                                onChange={handleChange}
                                value="1"
                                name="Female"
                                inputProps={{ 'aria-label': '1' }}
                            />
                            <label htmlFor="female">Feminino</label>
                        </div>
                        <div className="input-group">
                            <TextField className="text-input" type="number" name="Age" id="Age" placeholder="Idade" onChange={(e) => { setAge(e.target.value) }} />
                        </div>
                        <div className="input-group">
                            <TextField className="text-input" id="Address" label="Address" onChange={(e) => { setAddress(e.target.value) }} />
                        </div>
                        <div className="input-group actions">
                            <a href="#" >Cancelar</a>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </div>
            {alertMessageProps == undefined ? <div></div> : <AlertMessage open={alertMessageProps.open} type={alertMessageProps.type} message={alertMessageProps.message} />}
        </Container>
    );
}

export default PersonForm;