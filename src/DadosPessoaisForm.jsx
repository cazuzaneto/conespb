// DadosPessoaisForm.js
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const DadosPessoaisForm = ({ formData, handleChange }) => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        label="Nome Completo"
                        name="nomeCompleto"
                        value={formData.nomeCompleto}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Nome para Crachá"
                        name="nomeCracha"
                        value={formData.nomeCracha}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Empresa/Serviço"
                        name="empresaServico"
                        value={formData.empresaServico}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        type="date"
                        label="Data de Nascimento"
                        InputLabelProps={{ shrink: true }}
                        name="dataNascimento"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Genêro</InputLabel>
                        <Select
                            value={formData.genero}
                            label="Genêro"
                            name="genero"
                            onChange={handleChange}
                        >
                            <MenuItem value="MASCULINO">Masculino</MenuItem>
                            <MenuItem value="FEMININO">Feminino</MenuItem>
                            {/* Adicione outras opções de gênero conforme necessário */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        required
                        label="E-mail"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        required
                        label="CPF"
                        name="cpf"
                        value={formData.cpf}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Celular"
                        name="celular"
                        value={formData.celular}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default DadosPessoaisForm;
