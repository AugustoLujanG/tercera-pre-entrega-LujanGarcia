import express from 'express';
import passport from 'passport';
import UserDTO from '../DTO/user.dto.js';
export const sessionsRouter = express.Router();

sessionsRouter.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

sessionsRouter.get(
  '/githubcallback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    req.session.user = req.user;
    // Successful authentication, redirect products.
    res.redirect('/products');
  }
);

sessionsRouter.get('/current', (req, res) => {
  const user = req.session.user;
  const userDTO = new UserDTO(user);
  return res.send({ payload: userDTO });
});
