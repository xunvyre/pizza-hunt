const router = require('express').Router();
const {getAllPizza, getPizzaById, createPizza, updatePizza, deletePizza} = require('../../controllers/pizza-controller');

//all pizzas
router
.route('/')
.get(getAllPizza)
.post(createPizza);

//single pizza
router
.route('/:id')
.get(getPizzaById)
.put(updatePizza)
.delete(deletePizza);

module.exports = router;