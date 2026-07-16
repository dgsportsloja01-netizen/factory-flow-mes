const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Factory Flow MES API',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/dashboard', (req, res) => {
  res.json({
    ordensAtivas: 0,
    producaoHoje: 0,
    metaMes: 0,
    eficiencia: 0
  });
});

const msg = 'Factory Flow MES API rodando na porta ' + PORT;
app.listen(PORT, '0.0.0.0', () => {
  console.log(msg);
});
