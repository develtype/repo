import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.get('/', usersController.fetch);
router.post('/', usersController.create);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.delete);

export const usersRouter = router;
