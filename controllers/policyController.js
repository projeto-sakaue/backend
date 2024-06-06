const { Policy, User } = require('../models');
const { Op } = require('sequelize');

class PolicyController {
    static async createPolicy(req, res) {
        try {
            const { version, content, effective_date } = req.body;
            const policy = await Policy.create({ version, content, effective_date });

            res.status(201).json(policy);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getAllPolicies(req, res) {
        try {
            const policies = await Policy.findAll();
            res.status(200).json(policies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getPolicyById(req, res) {
        try {
            const policy = await Policy.findByPk(req.params.id);
            if (policy) {
                res.status(200).json(policy);
            } else {
                res.status(404).json({ message: 'Policy not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updatePolicy(req, res) {
        try {
            const policy = await Policy.findByPk(req.params.id);
            if (policy) {

                req.body.effective_date = new Date()
                req.body.version = (parseFloat(policy.version) + 1).toFixed(1);
                await policy.update(req.body);
                
                res.status(200).json(policy);
            } else {
                res.status(404).json({ message: 'Policy not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async deletePolicy(req, res) {
        try {
            const policy = await Policy.findByPk(req.params.id);
            if (policy) {
                await policy.destroy();
                res.status(200).json({ message: 'Policy deleted successfully' });
            } else {
                res.status(404).json({ message: 'Policy not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = PolicyController;
