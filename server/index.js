import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}`);
})