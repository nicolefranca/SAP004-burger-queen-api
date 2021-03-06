import express from 'express'
import bodyParser from 'body-parser'
import ProductRoutes from './server/Routes/ProductRoutes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

const port = process.env.PORT || 3000

app.use('/Products', ProductRoutes )

app.get('*', (req, res) => res.status(200).send({
    message: 'Hello word'
}))

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})
