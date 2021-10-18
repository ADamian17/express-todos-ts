import { Router } from 'express';
const router = Router()

import { todos } from '../controllers';

router.get('/', todos.index);
router.post('/', todos.create);
router.get('/:id', todos.show);
router.put('/:id', todos.update)
router.delete('/:id', todos.destroy);

export default router;
