const { Policy, PolicyDetails } = require('../models');

class PolicyController {
    static async createPolicy(req, res) {
        const { version, content, effective_date, details } = req.body;

        try {
            const policy = await Policy.create({
                version,
                content,
                effective_date
            });

            const policyDetailsPromises = details.map(detail => {
                return PolicyDetails.create({
                    id_policy: policy.id,
                    term_details: detail.term_details
                });
            });

            await Promise.all(policyDetailsPromises);

            const createdPolicy = await Policy.findOne({
                where: { id: policy.id },
                include: [{ model: PolicyDetails, as: 'details' }]
            });

            res.status(201).json(createdPolicy);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao criar a política e seus detalhes.' });
        }
    }
}

module.exports = PolicyController;
