import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js"; //i
import taskRoutes from "./routes/tasks.routes.js";//importamos las rutas a la app

const app = express();

app.use(express.json());
app.use(indexRoutes);// la app usara la rutas al servidor
app.use(taskRoutes);//la app usara las rutas a la  base de datos

app.listen(PORT);
console.log("el servidor esta conectado con la pagina web PARKING}");
