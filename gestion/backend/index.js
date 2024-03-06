const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const app=express();

const{mongoose}=require('./database'); // se importa el archivo database que contiene la conexion 
                                        //a la base de datos
                                        
//en este archivo se define la configuracion y el comportamiento del servidor
                                        
app.set('port',process.env.PORT||3000);//puerto por donde escucha el servidor
app.use(morgan('dev'));// es para ejecutar el morgan con el dev
app.use(express.json());//metodo que ayuda a convertir el codigo para que el servidor pueda entender lo que viene del cliente
app.use(cors({origin:'http://localhost:4200'}));//metodo para comunicar con el cliente
app.use('/api/empleados',require('./routes/empleados.routes'));
app.listen(app.get('port'),()=>{
    console.log('server activo en el puerto',app.get('port'));
});
// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal!');
  });


