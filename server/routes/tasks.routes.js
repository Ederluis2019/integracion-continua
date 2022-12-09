//en este modulo crearemos todas las rutas de nuestro Backen para interactuar con los metodos CRUD
import { Router } from "express"; //importamos express y traemos el enrutador
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router(); //desde aqui traemos un router para enrutarnos con la BD
//desde aqui creamos las rutas para el CRUD con la base de dato
router.get("/tasks", getTasks); //llamamos el controlador solicitar todas las tareas

router.get("/tasks/:id", getTask); //llamamos el controlador obtener una unica tarea apartir de un ID

router.post("/tasks", createTask); //llamamos el controlador crear tareas

router.put("/tasks/:id", updateTask); //llamamos el controlador actualizar tareas

router.delete("/tasks/:id", deleteTask); //llamamos el controlador ruta para eliminar apartir de un ID


export default router;