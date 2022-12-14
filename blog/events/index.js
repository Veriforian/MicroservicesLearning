const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

const events = [];

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);
  try {
    axios.post('http://127.0.0.1:4000/events', event);
    axios.post('http://127.0.0.1:4001/events', event);
    axios.post('http://127.0.0.1:4002/events', event);
    axios.post('http://127.0.0.1:4003/events', event);
  } catch (err) {
    console.log('EventBus Error');
  }
  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on Port: 4005');
});
