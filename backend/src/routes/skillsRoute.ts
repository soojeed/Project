import Router from 'express'
import { CreateProfile } from '../controllers/profile';
import { GetSkills } from '../controllers/skillsController';

const router = Router();

router.post('/Create', CreateProfile);
router.get('/Get', GetSkills);

export default router;