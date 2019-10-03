import express from "express"
import * as authController from "../controllers/auth"

const routes = express.Router()

routes.get('/auth/spotify', authController.spotifyLogin);
routes.get('/auth/spotify/callback', authController.spotifyCallback);
routes.get('/auth/spotify/refresh_user_data', authController.spotifyRefreshData);
routes.get('/auth/spotify/refresh_token', authController.spotifyRefreshToken);
routes.get('/auth/validate', authController.checkAuth);

export default routes;
