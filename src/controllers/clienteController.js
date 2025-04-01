const clienteService = require('../services/clienteService');

class clienteController {

    async agregarCliente(req, res) {
        try {
            res.render('clientes/agregarCliente');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async getClientes(req, res) {
        try {
            const clientes = await clienteService.getClientes();
            res.render('clientes/clientes', { clientes });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async editarCliente(req, res) {
        try {
            const { id } = req.params;
            const cliente = await clienteService.getClienteById(id);
            res.render('clientes/editarCliente', { cliente });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async createClientes(req, res) {
        try {
            const { tipo, nombre, telefono, sitio_web, red_social } = req.body;
            const nuevoCliente = await clienteService.createCliente({ tipo, nombre, telefono, sitio_web, red_social });
            res.redirect('/clientes');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async deleteCliente(req, res) {
        try {
            const { id } = req.params;
            await clienteService.deleteCliente(id);
            res.redirect('/clientes');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }
    
    async updateCliente(req, res) {
        try {
            const { id } = req.params;
            const { tipo, nombre, telefono, sitio_web, red_social } = req.body;
            const clienteActualizado = await clienteService.updateCliente(id, { tipo, nombre, telefono, sitio_web, red_social });
            res.redirect('/clientes');
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: error.message });
        }
    }

}

module.exports = new clienteController();