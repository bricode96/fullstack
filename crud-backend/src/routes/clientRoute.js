import express, { Router } from "express";
import * as clientController from "../controllers/clientController.js"

const router = express.Router();

router.get('/clients', clientController.getClients);
router.post('/clients', clientController.postClient);
router.put('/clients/:id', clientController.putClient);
router.delete('/clients/:id', clientController.deleteClient);
router.get('/clients/search', clientController.searchClients);

export default router;