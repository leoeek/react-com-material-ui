import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

const FormularioCadastro = ({ aoEnviar, validacoes }) => {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});

    useEffect(() => {
        if (etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados)
        }
    })

    const proximo = () => {
        setEtapaAtual(etapaAtual + 1);
    }

    const coletarDados = (dados) => {
        setDados({ ...dadosColetados, ...dados });
        proximo();
    }

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}  validacoes={validacoes} />,
        <DadosPessoais aoEnviar={coletarDados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarDados}  validacoes={validacoes} />,
        <Typography variant="h5">Obrigado pelo Cadastro!</Typography>
    ]

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    )

}

export default FormularioCadastro;