import { Router } from 'express';
import router = new Router();
router.get('/create',create);
router.post('/',state);

router.get("i_id/edit",edit);
router.put("/:_id",update);
router.delete("/:_d",deleteOne);

router.get("/:_id",show);

export default router;