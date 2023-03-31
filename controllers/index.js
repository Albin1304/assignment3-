const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) =>  {
  res.render('index', { title: 'Assignment 3' });
});

router.get('/addContacts', (req, res) =>{
res.render('addContacts',{
  title: 'Add Contacts'
})
res.render('/addContacts')

})
router.get('/about', (req, res) =>{
  res.render('about',{
    title: 'About'
})
res.render('/about')

  })

  router.get('/Contacts', (req, res) =>{
    res.render('Contacts',{
      title: 'Contacts'
})
res.render('/brother')

    })

  

   


module.exports = router;
