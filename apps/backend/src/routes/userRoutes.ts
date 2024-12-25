import { Router } from 'express';
import { updateUserData, fetchUserData, fetchUsersData } from '../controller/api';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.put('/update-user-data', authMiddleware, updateUserData);
router.get('/fetch-user-data', authMiddleware, fetchUsersData);
router.get('/fetch-user-data/:id', authMiddleware, fetchUserData);

export default router;
