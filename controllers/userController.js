const { User } = require('../models');

class UserController {
  static async createUser(req, res) {
    try {
      const user = await User.create({
        ...req.body,
        privacyPolicyAcceptedAt: new Date()
      });
      res.status(201).json(user);
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
