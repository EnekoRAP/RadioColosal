const tarifaService = require('../services/tarifaService');

class TarifaController {
    async showCreateForm(req, res) {
        try {
            res.render('tarifas/agregarTarifa', {
                tarifa: {
                    tipo: '',
                    cobertura: '',
                    tiempo: '',
                    precio: 0
                },
                tiposTarifa: ['Estándar', 'Premium', 'Oro', 'Platino'],
                coberturas: ['Local', 'Regional', 'Nacional', 'Internacional'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar el formulario');
        }
    }

    async listTarifas(req, res) {
        try {
            const tarifas = await tarifaService.getTarifas();
            res.render('tarifas/tarifas', { 
                tarifas,
                tiposTarifa: ['Estándar', 'Premium', 'Oro', 'Platino']
            });
        } catch (error) {
            res.status(500).send('Error al obtener tarifas');
        }
    }

    async showEditForm(req, res) {
        try {
            const { id } = req.params;
            const tarifa = await tarifaService.getTarifaById(id);
            res.render('tarifas/editarTarifa', { 
                tarifa,
                tiposTarifa: ['Estándar', 'Premium', 'Oro', 'Platino'],
                coberturas: ['Local', 'Regional', 'Nacional', 'Internacional'],
                error: null
            });
        } catch (error) {
            res.status(500).send('Error al cargar la tarifa');
        }
    }

    async createTarifa(req, res) {
        try {
            const { tipo, cobertura, tiempo, precio } = req.body;
            
            await tarifaService.createTarifa({ 
                tipo, 
                cobertura, 
                tiempo, 
                precio: parseFloat(precio)
            });
            
            res.redirect('/tarifas');
        } catch (error) {
            res.status(500).render('tarifas/agregarTarifa', {
                error: 'Error al crear la tarifa',
                tarifa: req.body,
                tiposTarifa: ['Estándar', 'Premium', 'Oro', 'Platino'],
                coberturas: ['Local', 'Regional', 'Nacional', 'Internacional']
            });
        }
    }

    async updateTarifa(req, res) {
        try {
            const { id } = req.params;
            const { tipo, cobertura, tiempo, precio } = req.body;
            
            await tarifaService.updateTarifa(id, { 
                tipo, 
                cobertura, 
                tiempo, 
                precio: parseFloat(precio)
            });
            
            res.redirect('/tarifas');
        } catch (error) {
            res.status(500).render('tarifas/editarTarifa', {
                error: 'Error al actualizar la tarifa',
                tarifa: req.body,
                tiposTarifa: ['Estándar', 'Premium', 'Oro', 'Platino'],
                coberturas: ['Local', 'Regional', 'Nacional', 'Internacional']
            });
        }
    }

    async deleteTarifa(req, res) {
        try {
            const { id } = req.params;
            await tarifaService.deleteTarifa(id);
            res.redirect('/tarifas');
        } catch (error) {
            res.status(500).send('Error al eliminar la tarifa');
        }
    }
}

module.exports = new TarifaController();