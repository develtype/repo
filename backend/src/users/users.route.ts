import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.get('/', usersController.fetch);
router.post('/', usersController.create);
router.put('/', usersController.update);
router.delete('/', usersController.delete);

export const usersRouter = router;
