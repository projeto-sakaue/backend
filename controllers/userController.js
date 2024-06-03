const { User } = require('../models');
const bcrypt = require('bcrypt')


class UserController {
  static async createUser(req, res) {
    try {
      const {name, email, cpf, telefone, password, privacyPolicyAccept} = req.body

      const hashedPassword = await bcrypt.hash(password, 10)

      const user = await User.create({
        name,
        email,
        cpf,
        telefone,
        password: hashedPassword,
        privacyPolicyAccept,
      })

      res.status(201).json({ id: user.id, name: user.name, email: user.email });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async getUserById(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  static async getUserByIdCliente(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        res.status(200).json({name: user.name, email: user.email});
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  static async updateUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.update(req.body);
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      if (user) {
        await user.destroy();
        res.status(200).json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = UserController;
