const express = require('express'),
      cors = require('cors'),
      goalCtrl = require('./controllers/goalCtrl')
      gradient = require('gradient-string')

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/goals', goalCtrl.addNew);
app.get('/api/goals', goalCtrl.getAll);
app.put('/api/goals/:id', goalCtrl.edit);
app.delete('/api/goals/:id', goalCtrl.delete);

app.listen(4040,() => console.log(gradient.rainbow('port is live on 4040')));