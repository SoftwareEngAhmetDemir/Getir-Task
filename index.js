import app from './server'
import {Host_Port} from './config'
const port = Host_Port || process.env.PORT

app.listen(port, () => {
console.log('http://localhost:',port)
});
