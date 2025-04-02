import  express  from "express";
import {signin} from "../controllers/auth.controller";
import { signup } from "../controllers/auth.controller";
const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);

export default router;