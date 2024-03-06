
//define las rutas (endpoints) para las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) 
//relacionadas con los empleados 

const express = require('express');

const router = express.Router();

const empleadoCtrl = require('../controllers/empleado.controller');//aqui se importa lo que hay en empleado.controller.js

router.get('/',empleadoCtrl.getEmpleados); // Rutas más limpias (obtener empleados)

router.post('/',empleadoCtrl.createEmpleados);//guardar

/*router.get('/:id', empleadoCtrl.getUnicoEmpleado);// obtiene un único empleado por id*/
/*router.get('/:cedula', empleadoCtrl.getUnicoEmpleado);//empleado por cedula*/
router.get('/cedula/:cedula', empleadoCtrl.getUnicoEmpleado);


/*router.put('/:id', empleadoCtrl.editarEmpleado);*/
router.put('/cedula/:cedula', empleadoCtrl.editarEmpleado);

router.delete('/cedula/:cedula', empleadoCtrl.eliminarEmpleado);


/*router.delete('/:id', empleadoCtrl.eliminarEmpleado);*/

module.exports = router;// se exporta pra ser usado por otro archivo

