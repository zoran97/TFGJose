const express = requiere('express');

const {body} = require('express-validator');

const router = express.Router()

const User = require('.../user');

router.post(
    '/signup',
    [
        body('name').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Inserte email válido.')
        .custom(async(email) => {
            const user = await User.find(email);
            if (user[0].length > 0) {
                return Promise.reject('Este email ya existe')
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({min: 7})
    ],  authController.signup
);

module.exports = router;
