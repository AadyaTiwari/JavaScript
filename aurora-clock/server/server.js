const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.static('../client'));

app.get('/time', (req, res) =>{
    const currentTime = new Date().toLocaleTimeString();
    res.json({time:currentTime});
}
);

app.listen(PORT, () =>{
    console.log('Server is running on http://localhost:${PORT}');
}
);