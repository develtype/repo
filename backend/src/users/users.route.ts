import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.get('/', usersController.fetch);

export const usersRouter = router;