import Router from 'express';
import  {CreateProfile } from '../controllers/profile';

const router = Router();

router.post('/create', CreateProfile)

export default router;