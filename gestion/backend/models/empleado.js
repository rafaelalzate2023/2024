
    
//en este modelo se especifica la estructura y validación de los datos que se esperan recibir desde el cliente,
// en este caso, en formato JSON.
const mongoose=require('mongoose');
const{Schema}=mongoose;
const EmpleadoSchema=new Schema({ //permite definir la estructura de los documentos que se almacenaran en la base de datos
    cedula:{type: Number, require: true,index:true},
    name:{type:String,require:true},
    position:{type:String,require:true},
    office:{type:String,require:true},
    salary:{type:Number,require:true},
});
    module.exports=mongoose.model('Empleado',EmpleadoSchema);

    
