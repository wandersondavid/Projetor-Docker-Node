import {Router} from 'express';
import User from './app/models/User'
const routes = new Router();

routes.get('/', async (req, res)=>{
    const user = await User.create({
        name: 'Wanderson David',
        email:'wanderson@gmail.com',
        password_hash: '1234256436',
    })
    return res.json(user);
})

export default routes;