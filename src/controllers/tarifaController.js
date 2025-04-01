const tarifaService = require('../services/tarifaService');

class tarifaController {

    async agregarTarifa(req, res) {
        try {
            res.render('tarifas/agregarTarifa');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async getTarifas(req, res) {
        try {
            const tarifas = await tarifaService.getTarifas();
            res.render('tarifas/tarifas', { tarifas });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async editarTarifa(req, res) {
        try {
            const { id } = req.params;
            const tarifa = await tarifaService.getTarifaById(id);
            res.render('tarifas/editarTarifa', { tarifa });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async createTarifas(req, res) {
        try {
            const { tipo, cobertura, tiempo, precio } = req.body;
            const nuevaTarifa = await tarifaService.createTarifa({ tipo, cobertura, tiempo, precio });
            res.redirect('/tarifas');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async deleteTarifa(req, res) {
        try {
            const { id } = req.params;
            await tarifaService.deleteTarifa(id);
            res.redirect('/tarifas');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async updateTarifa(req, res) {
        try {
            const { id } = req.params;
            const { tipo, cobertura, tiempo, precio } = req.body;
            const tarifaActualizada = await tarifaService.updateTarifa(id, { tipo, cobertura, tiempo, precio });
            res.redirect('/tarifas');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new tarifaController();