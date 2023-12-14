import express from 'express';
import { createUser, allUsers, userWithId, deleteUser, updateUser} from '../controllers/users.js';
const router = express.Router();



router.get('/', allUsers);

router.post('/', createUser);

router.get('/:id', userWithId);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);



export default router;