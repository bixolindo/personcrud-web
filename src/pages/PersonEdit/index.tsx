import React, { useState, FormEvent, useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage'

import api from '../../services/api'

import { Container } from './styles'
import { Link, useHistory, useParams } from 'react-router-dom';
import { Person } from '../../components/Card';
import { motion } from 'framer-motion'
import { useRef } from 'react';
import placeholder from '../../img/pl-profile.jpeg'



const PersonEdit: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>()
    const history = useHistory();
    const [name, setName] = useState(" ");
    const [sex, setSex] = useState(" ");
    const [age, setAge] = useState(" ");
    const [address, setAddress] = useState(" ");
    const [profilePhoto, setProfilePhoto] = useState<string | undefined>();
    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);
    const imageInputRef = useRef<HTMLInputElement>(null);

    const carregarPessoa = useEffect(() => {
        async function loadPersons() {
            const response = await api.get(`/person/${id}`)
            const pessoacerta : Person = response.data;
            setName(pessoacerta.name);
            // setSex(String(pessoacerta.sex));
            // setAge(String(pessoacerta.age));
            // setAddress(pessoacerta.address);
            setProfilePhoto(response.data.base64);
        }
        loadPersons();
    }, [])




    function addPerson(e: FormEvent) {
        e.preventDefault();
        api.put(`/person/${id}`, {
            name,
            sex: Number(sex),
            age: Number(age),
            address,
            base64: profilePhoto
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

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSex(event.target.value)
    };

    const onClickSelectImage = () => {
        if (imageInputRef != null && imageInputRef.current != null) {
            imageInputRef.current.click();
        }

    }

    const onImageSelected = async (event: any) => {
        let file: File = event.target.files[0];
        let base64: string | undefined = await toBase64(file);
        setProfilePhoto(base64);
    }

    const toBase64 = (file: File) => new Promise<string | undefined>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result?.toString());
        reader.onerror = error => reject(error);
    });


    const containerVariants = {
        hidden: {
            opacity: 0,
            transform: "translate(100%, 0)",
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
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {carregarPessoa}
            <Container>
                <h1>Editar Pessoa</h1>
                <div className="menu">
                    <div className="form">
                        <form onSubmit={addPerson}>
                            <div className="img-container">
                                <img onClick={onClickSelectImage} className="img" src={profilePhoto || placeholder} alt="profile-img" />
                                <input onChange={(e) => onImageSelected(e)} ref={imageInputRef} className="hide-input" type="file" id="img" name="img" accept="image/*" />
                            </div>
                            <div className="name-camp">
                                <TextField className="text-input" id="name" value={name} label="Nome" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="age-camp">
                                <TextField className="text-input" type="number" name="Age" id="Idade" value={age} onChange={(e) => { setAge(e.target.value) }} />
                            </div>
                            <div className="radio-camp">
                                <Radio
                                    checked={sex == '0'}
                                    onChange={handleChange}
                                    value="0"
                                    name="Male"
                                    inputProps={{ 'aria-label': '0' }}
                                />
                                <label htmlFor="male"><i className="fa fa-mars" aria-hidden="true"></i></label>
                                <Radio
                                    checked={sex == '1'}
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