var asignaturaController = require('./asignaturaController');
var estudianteController = require('./estudianteController');
var docenteController = require('./docenteController');
var recordController = require('./recordController');
const { asignatura,estudiante,docente,record} = require('./modelos');

//reporte
var config = require('./dbconfig');
const sql = require('mssql');


var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
 //const { application } = require('express');
 //const { connect } = require('mssql');
var router = express.Router();
app.use(bodyParser.urlencoded({extended:true}));
//app.use(bodyParser.express);
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

var port = process.env.port || 8090;
app.listen(port);
console.log('running in the port '+ port);

router.use((request,response,next) =>{
console.log('Welcome, Time:', Date.now());
next();
});



router.route('/asignaturas').get((request, response)=>{
    asignaturaController.seleccionar().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/asignaturas/:id').get((request, response)=>{
    asignaturaController.seleccionarId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/asignaturas').post((request, response)=>{
    let asignatura = {...request.body}
    asignaturaController.crear(asignatura).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/asignaturas/:id').put((request, response)=>{
    let asignatura = {...request.body}
    asignaturaController.editar(asignatura,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/asignaturas/:id').delete((request, response)=>{
   let asignatura = {...request.body}
    asignaturaController.deleteId(asignatura,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})



//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::::route:asignaturas ::::::::::::::::::::::::::::::::::::
router.route('/asignaturas').get((request, response)=>{
    asignaturaController.seleccionar().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/asignaturas/:id').get((request, response)=>{
    asignaturaController.seleccionarId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/asignaturas').post((request, response)=>{
    let asignatura = {...request.body}
    asignaturaController.crear(asignatura).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/asignaturas/:id').put((request, response)=>{
    let asignatura = {...request.body}
    asignaturaController.editar(asignatura,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/asignaturas/:id').delete((request, response)=>{
   let asignatura = {...request.body}
    asignaturaController.deleteId(asignatura,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})


//::::::::::::::::::::::::::route:estudiantes ::::::::::::::::::::::::::::::::::::
router.route('/estudiantes').get((request, response)=>{
    estudianteController.seleccionar().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/estudiantes/:id').get((request, response)=>{
    estudianteController.seleccionarId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/estudiantes').post((request, response)=>{
    let estudiante = {...request.body}
    estudianteController.crear(estudiante).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/estudiantes/:id').put((request, response)=>{
    let estudiante = {...request.body}
    estudianteController.editar(estudiante,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/estudiantes/:id').delete((request, response)=>{
   let estudiante = {...request.body}
   estudianteController.deleteId(estudiante,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})
//::::::::::::::::::::::::::route:docentes ::::::::::::::::::::::::::::::::::::
router.route('/docentes').get((request, response)=>{
    docenteController.seleccionar().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/docentes/:id').get((request, response)=>{
    docenteController.seleccionarId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/docentes').post((request, response)=>{
    let docente = {...request.body}
    docenteController.crear(docente).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/docentes/:id').put((request, response)=>{
    let docente = {...request.body}
    docenteController.editar(docente,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/docentes/:id').delete((request, response)=>{
   let docente = {...request.body}
   docenteController.deleteId(docente,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})
//::::::::::::::::::::::::::route:record ::::::::::::::::::::::::::::::::::::

router.route('/records').get((request, response)=>{
    recordController.seleccionar().then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/records/:id').get((request, response)=>{
    recordController.seleccionarId(request.params.id).then(result =>{
        response.json(result);
        console.log(result)
    })
})

router.route('/records').post((request, response)=>{
    let record = {...request.body}
    recordController.crear(record).then(result =>{
        response.status(201).json(result);        
        console.log(result)
    })
})

router.route('/records/:id').put((request, response)=>{
    let record = {...request.body}
    recordController.editar(record,request.params.id).then(result =>{
       response.json(result)     
        console.log(result)
    })
})

router.route('/records/:id').delete((request, response)=>{
   let record = {...request.body}
    recordController.deleteId(record,request.params.id).then(result =>{
       response.json(result)     
       console.log('Eliminado!!!')
    })
})


router.route('/reporte').get((request, response)=>{
    reporteT().then(result =>{
        response.json(result);
        console.log(result)
    })
})

 async function reporteT() {
    try {
        let pool = await sql.connect(config);        
        let reporte = await pool.request()
        .execute('SP_REPORTE')
        return reporte.recordset;
    }
    catch (error) {
        console.log(error);
    }
} 