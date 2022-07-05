import TextField from '@material-ui/core/TextField';
import { motion } from 'framer-motion';
import React, { FormEvent, useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AlertMessage, { AlertMessageProps } from '../../components/AlertMessage';
import placeholder from "../../img/pl-profile.jpeg";
import api from '../../services/api';
import { Container } from './styles';

const PersonForm: React.FC = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [name_pais, setName_pais] = useState("");
    const [rg, setRg] = useState("");
    const [endereco, setEndereco] = useState("");
    const [comprovante, setComprovante] = useState<string | undefined>();
    const imageInputRef = useRef<HTMLInputElement>(null);

    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);


    function addPerson(e: FormEvent) {
        e.preventDefault();
        api.post("crianca", {
            name,
            name_pais,
            rg,
            endereco,
            comprovante
        }).then(async (person: any) => {
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
        });
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

    const onClickSelectImage = () => {
        if (imageInputRef != null && imageInputRef.current != null) {
            imageInputRef.current.click();
        }

    }

    const onImageSelected = async (event: any) => {
        let file: File = event.target.files[0];
        let base64: string | undefined = await toBase64(file);
        setComprovante(base64);
    }

    const toBase64 = (file: File) => new Promise<string | undefined>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result?.toString());
        reader.onerror = error => reject(error);
    });

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
                        <form onSubmit={addPerson}>
                            <div className="img-container">
                                <img onClick={onClickSelectImage} className="img" src={comprovante || placeholder} alt="profile-img" />
                                <input onChange={(e) => onImageSelected(e)} ref={imageInputRef} className="hide-input" type="file" id="img" name="img" accept="image/*" />
                            </div>

                            <div className="name-camp">
                                <TextField className="text-input" id="name" label="Nome" onChange={(e) => { setName(e.target.value) }} />
                            </div>
                            <div className="name-camp">
                                <TextField className="text-input" name="Name_pais" id="Name_pais" placeholder="Nome Pais" onChange={(e) => { setName_pais(e.target.value) }} />
                            </div>

                            <div className="address-camp">
                                <TextField className="text-input" id="Endereco" label="Endereço" onChange={(e) => { setEndereco(e.target.value) }} />
                            </div>
                            <div className="address-camp">
                                <TextField className="text-input" id="Rg" label="RG" onChange={(e) => { setRg(e.target.value) }} />
                            </div>
                            <div className="input-group actions">
                                <Link to="/home" className="btncancel">Cancelar</Link>
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

export default PersonForm;