const programacionService = require('../services/programacionService');

class ProgramacionController {
    async listProgramas(req, res) {
        try {
            const programas = await programacionService.getAllProgramas();
            res.json(programas); 
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getPrograma(req, res) {
        try {
            const programa = await programacionService.getProgramaById(req.params.id);
            if (!programa) {
                return res.status(404).json({ error: 'Programa no encontrado' });
            }
            res.json(programa);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProgramacionController();