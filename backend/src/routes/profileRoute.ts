import Router from 'express';
import  {CreateProfile, deleteProfile, GetProfile, updateProfile } from '../controllers/profile';

const router = Router();

router.post('/create', CreateProfile)
router.get('/get', GetProfile)
router.put('/update/:id', updateProfile)
router.delete('/delete/:id', deleteProfile)

export default router;