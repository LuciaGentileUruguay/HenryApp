const { Router } = require('express');

// import all routers;
const Email = require('./sendMails.js');
const User = require('./user.js')
const Admin = require('./admin.js')
const Cohort = require('./cohort')
const Pm = require('./pm')
const Student = require('./student')
const Group = require('./group.js')
const Instructor = require('./instructor')
const Posts = require('./posts')
const Links = require('./links')

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use('/email', Email);
router.use('/user', User);
router.use('/admin', Admin)
router.use('/cohort', Cohort)
router.use('/pm', Pm)
router.use('/student', Student)
router.use('/group', Group)
router.use('/instructor', Instructor)
router.use('/posts', Posts)
router.use('/links', Links)

module.exports = router;
