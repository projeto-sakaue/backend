const { Term, User } = require('../models');
const { Op } = require('sequelize');

class TermController {
    static async createTerm(req, res) {
        try {
            const { version, content, effective_date } = req.body;
            const term = await Term.create({ version, content, effective_date });

            res.status(201).json(term);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async getAllTerms(req, res) {
        try {
            const terms = await Term.findAll();
            res.status(200).json(terms);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async getTermById(req, res) {
        try {
            const term = await Term.findByPk(req.params.id);
            if (term) {
                res.status(200).json(term);
            } else {
                res.status(404).json({ message: 'Term not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async updateTerm(req, res) {
        try {
            const term = await Term.findByPk(req.params.id);
            if (term) {

                req.body.effective_date = new Date()
                req.body.version = (parseFloat(term.version) + 1).toFixed(1);
                await term.update(req.body);
                
                res.status(200).json(term);
            } else {
                res.status(404).json({ message: 'Term not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    static async deleteTerm(req, res) {
        try {
            const term = await Term.findByPk(req.params.id);
            if (term) {
                await term.destroy();
                res.status(200).json({ message: 'Term deleted successfully' });
            } else {
                res.status(404).json({ message: 'Term not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = TermController;
