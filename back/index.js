// Paquetes instalados: -g nodemon, express, body-parser, mysql2, socket.io
// Agregado al archivo "package.json" la línea --> "start": "nodemon index"

// Proyecto "Node_base"
// Desarrollo de Aplicaciones Informáticas - Proyecto de Producción - 5to Informática

// Docentes: Nicolás Facón, Matías Marchesi, Martín Rivas

// Revisión 5 - Año 2024

// Cargo librerías instaladas y necesarias
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const MySQL = require('./modulos/mysql');				// Añado el archivo mysql.js presente en la carpeta módulos
const session = require('express-session');				// Para el manejo de las variables de sesión
const cors = require('cors');

const app = express();									// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());
app.use(cors())

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

const io = require('socket.io')(server, {
	cors: {
		// IMPORTANTE: REVISAR PUERTO DEL FRONTEND
		origin: "http://localhost:3000",            	// Permitir el origen localhost:3000
		methods: ["GET", "POST", "PUT", "DELETE"],  	// Métodos permitidos
		credentials: true                           	// Habilitar el envío de cookies
	}
});

const sessionMiddleware = session({
	//Elegir tu propia key secreta
	secret: "supersarasa",
	resave: true,
	saveUninitialized: true
});

app.use(sessionMiddleware);

io.use((socket, next) => {
	sessionMiddleware(socket.request, {}, next);
});

// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)
// A PARTIR DE ESTE PUNTO GENERAREMOS NUESTRO CÓDIGO (PARA RECIBIR PETICIONES, MANEJO DB, ETC.)

app.get('/getUser', async function(req,res) {
    console.log(req.query);
    let usuarioExistente = await MySQL.realizarQuery(`select * from Usuarios where nombre = '${req.query.nombre}' and contraseña = '${req.query.contraseña}'` );
    if (usuarioExistente.length != 0 ) {
        res.status(200);
        res.send({res:"usuario ingresado", id: `${usuarioExistente[0].id}`});
    } else {
        res.status(204);
        res.send({res:"usuario o contraseña incorrecta",id: usuarioExistente.id});   
    }
})

app.get('/getChats', async function(req,res) {
    console.log(req.query);
    let chats = await MySQL.realizarQuery(`select * from Chats_users where Id_user = ${req.query.userId}` );
	res.send({chats: chats})
	
})

app.post('/addUser', async function(req,res) {
    console.log(req.body);
    let usuarioExistente = await MySQL.realizarQuery(`select * from Usuarios where Nombre = '${req.body.nombre}'`);
	console.log(usuarioExistente);
    if (usuarioExistente.length != 0) {
        res.status(204);
        res.send("ya existe ese usuario");
    } else {
		await MySQL.realizarQuery(`INSERT INTO Usuarios (nombre, contraseña, mail, puntaje)
			VALUES ('${req.body.nombre}', '${req.body.contraseña}', '${req.body.mail}', 0)`);

		let usuarioExistente = await MySQL.realizarQuery(`select * from Usuarios where Nombre = '${req.body.nombre}'`);
		res.status(200);
        res.send({res:"usuario ingresado", id: `${usuarioExistente[0].id}`});
    }
})

app.get('/', (req, res) => {
	console.log(`[REQUEST - ${req.method}] ${req.url}`);
});

app.post('/login', async (req, res) => {

	let usuarioExistente = await MySQL.realizarQuery(`select * from Usuarios where nombre = '${req.body.nombre}' and contraseña = '${req.body.contraseña}'` );
    if (usuarioExistente.length != 0 ) {
        //res.status(200);
		req.session.idUser = usuarioExistente[0].id
        res.send({status:200,res:"usuario ingresado", id: `${usuarioExistente[0].id}`});
    } else {
        //res.status(204);
        res.send({status:204, res:"usuario o contraseña incorrecta",id: usuarioExistente.id});   
    }

});

app.delete('/login', (req, res) => {
	console.log(`[REQUEST - ${req.method}] ${req.url}`);
	res.send(null);
});

io.on("connection", (socket) => {
	const req = socket.request;

	socket.on('joinRoom', data => {
		console.log("🚀 ~ io.on ~ req.session.room:", req.session.room)
		if (req.session.room != undefined && req.session.room.length > 0)
			socket.leave(req.session.room);
		req.session.room = data.room;
		socket.join(req.session.room);

		io.to(req.session.room).emit('chat-messages', { user: req.session.user, room: req.session.room });
	});

	socket.on('pingAll', data => {
		console.log("PING ALL: ", data);
		io.emit('pingAll', { event: "Ping to all", message: data });
	});

	socket.on('sendMessage', data => {
		io.to(req.session.room).emit('newMessage', { room: req.session.room, message: data });
	});

	socket.on('disconnect', () => {
		console.log("Disconnect");
	})
});

