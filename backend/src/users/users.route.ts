import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.get('/', usersController.fetch);
router.post('/', usersController.create);
router.put('/', usersController.update);

export const usersRouter = router;
