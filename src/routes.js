import { Router } from "express";
import contactValidations from "./middlewares/middleware.js";

import {
  createContact,
  listContacts,
  deleteContact,
  updateContact,
} from "./controllers/ContactController.js";

const routes = Router();

/* Rotas dos contatos */
routes.post("/createContact",contactValidations, createContact);
routes.get("/listContacts",listContacts);
routes.delete("/deleteContact/:id", deleteContact);
routes.patch("/updateContact/:id", updateContact);

export default routes;
