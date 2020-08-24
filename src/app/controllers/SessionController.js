import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import authConfig from '../../config/auth';

import User from '../schemas/User';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne().where({ email });

    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ error: 'Incorrect password' });

    const { _id } = user;

    return res.json({
      email,
      token: jwt.sign({ id: _id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
