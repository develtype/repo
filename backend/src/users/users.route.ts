import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.get('/', usersController.fetch);
router.post('/', usersController.create);

export const usersRouter = router;
