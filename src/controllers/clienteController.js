const clienteService = require('../services/clienteService');

class clienteController {

    async agregarCliente(req, res) {
        try {
            res.render('clientes/agregarCliente', {
                cliente: {
                    red_social: {
                        facebook: '',
                        x: '',
                        instagram: '',
                        youtube: ''
                    }
                },
                error: null
            });
        } catch (error) {
            console.error(error);
            res.status(500).send('Error al cargar el formulario');
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
            const { tipo, nombre, telefono, sitio_web } = req.body;
            
            // Procesar redes
            const red_social = {
                facebook: req.body.red_social?.facebook || '',
                x: req.body.red_social?.x || '',
                instagram: req.body.red_social?.instagram || '',
                youtube: req.body.red_social?.youtube || ''
            };
    
            await clienteService.createCliente({ 
                tipo, 
                nombre, 
                telefono, 
                sitio_web, 
                red_social 
            });
            
            res.redirect('/clientes');
        } catch (error) {
            console.error('Error al crear cliente:', error);
            res.status(500).render('clientes/agregarCliente', { 
                error: 'Error al crear el cliente',
                cliente: {
                    ...req.body,
                    red_social: {
                        facebook: req.body.red_social?.facebook || '',
                        x: req.body.red_social?.x || '',
                        instagram: req.body.red_social?.instagram || '',
                        youtube: req.body.red_social?.youtube || ''
                    }
                }
            });
        }
    }
    
    async deleteCliente(req, res) {
        try {
            const { id } = req.params;
            await clienteService.deleteCliente(id);
            

            res.redirect('/clientes');
            

        } catch (error) {
            console.error('Error al eliminar cliente:', error);
            
            
            res.redirect('/clientes?error=delete_error');
            
            
        }
    }
    
    async updateCliente(req, res) {
        try {
            const { id } = req.params;
            const updateData = {
                tipo: req.body.tipo,
                nombre: req.body.nombre,
                telefono: req.body.telefono,
                sitio_web: req.body.sitio_web,
                red_social: {
                    facebook: req.body.red_social?.facebook || '',
                    x: req.body.red_social?.x || '',
                    instagram: req.body.red_social?.instagram || '',
                    youtube: req.body.red_social?.youtube || ''
                }
            };
    
            const clienteActualizado = await clienteService.updateCliente(id, updateData);
            res.redirect('/clientes');
        } catch (error) {
            console.error('Error al actualizar cliente:', error);
            res.status(500).render('error', { 
                message: 'Error al actualizar el cliente',
                error: process.env.NODE_ENV === 'development' ? error : {}
            });
        }
    }

}

module.exports = new clienteController();
