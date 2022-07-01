import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import defaultimg from '../../img/default_mk1.png';
import { Crianca } from '../../pages/PersonForm/crianca';
import api from '../../services/api';
import { AlertMessageProps } from '../AlertMessage';
import { Container } from './styles';



export interface Person {
    id: number;
    name: string;
    type: number;
    namepais: string;
    rg: string;
    password: string;
}

interface PersonItemProps {
    crianca: Crianca;
    onDelete: Function;
}

const style = {
    position: 'absolute' as 'absolute',
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,

};

const Card: React.FC<PersonItemProps> = ({ crianca }) => {
    const [alertMessageProps, setAlertMessageProps] = useState<AlertMessageProps | undefined>(undefined);

    function invalidaEndereco(crianca: Crianca) {
        crianca.valido = false;
        api.put(`crianca/${crianca.id}`, crianca).then(async (person: any) => {
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
    function confirmaEndereco(crianca: Crianca) {
        crianca.valido = true;
        api.put(`crianca/${crianca.id}`, crianca).then(async (person: any) => {

        });
    }

    function showAlertMessage(alertMessage: AlertMessageProps) {
        setAlertMessageProps(alertMessage)
        setTimeout(() => {
            alertMessage.open = false
            setAlertMessageProps({ ...alertMessage })
        }, 1500)
    }

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div className="our-team">
                            <button onClick={handleOpen} className="picture">
                                <img src={crianca.comprovante || defaultimg} alt="" className="img-fluid" />
                            </button>
                            <div className="team-content">
                                <h3 className="name">{crianca.name}</h3>
                                <h4 className="title">{crianca.name_pais}</h4>
                                <h4 className="title">{crianca.endereco} anos</h4>

                            </div>
                            <ul className="social">
                                <li>
                                    <button onClick={() => confirmaEndereco(crianca)} className="fa fa-pencil" aria-hidden="true"></button>
                                </li>
                                <li>
                                    <button onClick={() => invalidaEndereco(crianca)} className="fa fa-trash" aria-hidden="true"></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            ><img src={crianca.comprovante || defaultimg} style={style} /></Modal>
        </>
    );
}

export default Card;
