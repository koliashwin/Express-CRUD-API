import { Router } from "express";
import { 
    createNewUser,
    getSingleUser, 
    getUsersList, 
    removeUser, 
    updateExistingUser
} from "../controllers/userController.js";


const router = Router();

router.get('/', getUsersList);
router.get('/:id', getSingleUser);
router.post('/', createNewUser);
router.put('/:id', updateExistingUser);
router.delete('/:id', removeUser);

export default router;