const { Term, TermDetails } = require('../models');

const createTerm = async (req, res) => {
    const { version, content, effective_date, details } = req.body;

    try {
        // Criar o termo
        const term = await Term.create({ version, content, effective_date });

        // Criar os detalhes associados
        if (details && details.length > 0) {
            const termDetails = details.map(detail => ({
                ...detail,
                id_term: term.id
            }));
            await TermDetails.bulkCreate(termDetails);
        }

        res.status(201).json(term);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createTerm
};
