import express from 'express'
import {CreateSkils, GetSkills} from '../controllers/skillsController'


const router = express.Router();
router.post('/Create', CreateSkils);
router.get('/Get', GetSkills);

export default router;