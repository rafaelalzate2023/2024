const empleado = require('../models/empleado');
const Empleado=require('../models/empleado');
const empleadoCtrl={};

//este es el archivo controlador se encarga de definir los métodos y acciones que necesitan las rutas. 
empleadoCtrl.getEmpleados=async(req,res)=>{
    const empleados=await Empleado.find();
    res.json(empleados);
}

empleadoCtrl.createEmpleados=async(req,res)=>{
    const empleado=new Empleado(req.body);
    await empleado.save();
    res.json({'status':'Empleado guardado'});
}

empleadoCtrl.getUnicoEmpleado=async(req,res)=>{
    /*es este se deja asi si es de tipo string la cedula  ({ cedula: req.params.cedula })*/
    const empleadoUnico = await Empleado.findOne({ cedula: Number (req.params.cedula) });// get por cedula
    /*const empleadoUnico=await Empleado.findById(req.params.id); /*get por id*/
    res.json(empleadoUnico);
}



/*empleadoCtrl.editarEmpleado = async (req, res) => {
  const nota= await Empleado.findByIdAndUpdate(req.params.id,req.body);
  const { id } = req.params;
  const empleadoEdit = {
     _id:req.body._id,
      cedula: req.body.cedula,
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
  };

  try {
      await Empleado.findByIdAndUpdate(id, { $set: empleadoEdit }, { new: true });
      res.json({ status: 'Empleado Actualizado' });
  } catch (error) {
      console.error('Error al actualizar empleado:', error);
      res.status(500).json({ status: 'Error al actualizar empleado', error });
  }
};


/*empleadoCtrl.eliminarEmpleado=async(req,res)=>{
    
    await Empleado.findByIdAndDelete(req.params.id);
    res.json({status:'Empleado Eliminado'});
}*/



empleadoCtrl.editarEmpleado = async (req, res) => {
    const cedula = req.params.cedula;
    const empleadoEdit = {
      cedula: req.body.cedula,
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
    };
  
    try {
      const updatedEmpleado = await Empleado.findOneAndUpdate({ cedula: cedula }, { $set: empleadoEdit }, { new: true });
  
      if (!updatedEmpleado) {
        return res.status(404).json({ status: 'Empleado no encontrado' });
      }
  
      res.json({ status: 'Empleado Actualizado', empleado: updatedEmpleado });
    } catch (error) {
      console.error('Error al actualizar empleado:', error);
      res.status(500).json({ status: 'Error al actualizar empleado', error });
    }
  };

empleadoCtrl.eliminarEmpleado=async(req,res)=>{
    
    const eliminarempleado = await Empleado.findOneAndDelete({ cedula: Number(req.params.cedula) });
    res.json({status:'Empleado Eliminado'});
}



module.exports=empleadoCtrl;

