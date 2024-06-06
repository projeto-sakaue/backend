const { UserHistory } = require('../models');

class UserHistoryController {
    static async createUserHistory(req, res) {
        const { user_id, policy_detail_id, acceptance_status } = req.body;
        const acceptance_date = new Date();

        try {
            const userHistory = await UserHistory.create({
                user_id,
                policy_detail_id,
                acceptance_status,
                acceptance_date
            });

            res.status(201).json(userHistory);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o histórico do usuário.' });
        }
    }
}

module.exports = UserHistoryController;
