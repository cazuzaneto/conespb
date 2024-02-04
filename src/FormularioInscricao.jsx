// FormularioInscricao.js
import { Container, Button, Stepper, Step, StepLabel, Typography, Paper  } from '@mui/material';
import React, { useState } from 'react';
import DadosPessoaisForm from './DadosPessoaisForm';
import DadosPoltronaForm from './DadosPoltronaForm';
import EnderecoForm from './EnderecoForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const getSteps = () => {
  return ['Dados Pessoais', 'Endereço', 'Informações de Inscrição'];
};

// Cria um tema com as cores e estilos desejados
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
  typography: {
    h5: {
      fontWeight: 500, // Peso da fonte do título
    },
    body1: {
      fontWeight: 400, // Peso da fonte do corpo
    },
  },
  // Estilos para outros componentes do Material-UI podem ser adicionados aqui

  overrides: {
    MuiStepper: {
      root: {
        padding: '24px 0', // ajusta o padding do Stepper se necessário
      },
    },
    MuiStepIcon: {
      root: {
        // Define o tamanho dos ícones do Stepper, se necessário
        '&$completed': { color: 'green' },
        '&$active': { color: 'blue' },
      },
    },
    MuiButton: {
      // Aplica estilo aos botões, como tamanho e margens
      root: {
        margin: '8px',
      },
    },
  },
});

const FormularioInscricao = ({ handleChange }) => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    nomeCracha: '',
    empresaServico: '',
    dataNascimento: '',
    genero: '',
    email: '',
    cpf: '',
    telefone: '',
    celular: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    nomeResponsavel: '',
    telefoneResponsavel: '',
    categoria: '',
    necessidadePoltrona: '',
    poltrona: '',
    desconto: '',
    autorizado: '',
    autorizacao: ''
  });

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Seu estado formData e a função handleChange

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <DadosPessoaisForm formData={formData} handleChange={handleChange} />;
      case 1:
        return <EnderecoForm formData={formData} handleChange={handleChange} />;
      case 2:
        return <DadosPoltronaForm formData={formData} handleChange={handleChange} />;
      default:
        return 'Etapa desconhecida';
    }
  };

  // Funções para lidar com a navegação entre etapas

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={2} sx={{ my: { xs: 2, md: 6 }, p: { xs: 2, md: 3 }, borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Formulário de Inscrição
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Preencha os dados para o congresso
          </Typography>
          <Stepper activeStep={activeStep} alternativeLabel sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* Conteúdo do formulário */}
          <div>
            {getStepContent(activeStep)}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 32 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 1 }}>
                  Voltar
                </Button>
              )}
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                sx={{ ml: activeStep !== 0 ? 2 : 0 }}
              >
                {activeStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
              </Button>
            </div>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default FormularioInscricao;
