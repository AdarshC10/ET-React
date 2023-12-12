
//we export the addIncome in income.js so we use it here
const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controllers/income');

const router = require('express').Router();


//checking to get the output get in server through postman

// router.get('/', (req,res)=>{
//     res.send("hello world")
// })

// used post method 
router.post('/add-income',addIncome)
//getting income
         .get('/get-incomes',getIncomes)
            .delete('/delete-income/:id',deleteIncome)//basically params is /:id
            .post('/add-expense',addExpense)
            .get('/get-expenses',getExpense)
            .delete('/delete-expense/:id',deleteExpense)
module.exports = router