import express from 'express';
import { submitContact, getContacts, deleteContact } from '../controllers/contactController.js';

const contactRouter = express.Router();

contactRouter.post('/', submitContact);
contactRouter.get('/', getContacts);
contactRouter.delete('/:id', deleteContact);

export default contactRouter;


