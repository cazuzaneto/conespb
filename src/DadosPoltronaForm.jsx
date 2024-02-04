// InformacoesInscricaoForm.js
import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

const DadosPoltronaForm = ({ formData, handleChange }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.pendrive}
                onChange={handleChange}
                name="pendrive"
              />
            }
            label="Incluir pendrive (R$ 150,00)"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="categoria-label">Categoria</InputLabel>
            <Select
              labelId="categoria-label"
              name="categoria"
              value={formData.categoria}
              onChange={handleChange}
              label="Categoria"
            >
              <MenuItem value="ADULTO">ADULTO - R$ 190,00</MenuItem>
              {/* Outras opções de categoria */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="necessidadePoltrona-label">Necessidade de poltrona</InputLabel>
            <Select
              labelId="necessidadePoltrona-label"
              name="necessidadePoltrona"
              value={formData.necessidadePoltrona}
              onChange={handleChange}
              label="Necessidade de poltrona"
            >
              <MenuItem value="Nenhuma">Nenhuma das anteriores</MenuItem>
              {/* Outras opções de necessidade de poltrona */}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Poltrona"
            name="poltrona"
            value={formData.poltrona}
            onChange={handleChange}
            placeholder="Ex: A1, B2, C3..."
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Desconto"
            name="desconto"
            value={formData.desconto}
            onChange={handleChange}
            placeholder="Insira o valor do desconto se aplicável"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Autorizado Por"
            name="autorizado"
            value={formData.autorizado}
            onChange={handleChange}
            placeholder="Nome da pessoa que autorizou"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Autorização"
            name="autorizacao"
            value={formData.autorizacao}
            onChange={handleChange}
            placeholder="Detalhes da autorização"
            multiline
            rows={4}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default DadosPoltronaForm;
