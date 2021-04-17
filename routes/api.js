const router = require('express').Router();
const apiController = require('../controllers/apiController');
const { uploadSingle } = require('../middlewares/multer');

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page', uploadSingle, apiController.bookingPage);



// paramms di alamar url
// body form
//404 = not found, 500=error, 200=berhasill


module.exports = router;