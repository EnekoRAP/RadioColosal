const Cliente = require('../models/cliente');

class clienteService {

    async createCliente(data) {
        const red_social = {
            facebook: data.red_social?.facebook || '',
            x: data.red_social?.x || '',
            instagram: data.red_social?.instagram || '',
            youtube: data.red_social?.youtube || ''
        };
    
        const cliente = new Cliente({
            tipo: data.tipo,
            nombre: data.nombre,
            telefono: data.telefono,
            sitio_web: data.sitio_web,
            red_social: red_social
        });
        
        await cliente.save();
        return cliente;
    }


    async getClientes() {
        return await Cliente.find();
    }

    async getClienteById(id) {
        return await Cliente.findById(id);
    }

    async updateCliente(id, updateData) {
        return await Cliente.findByIdAndUpdate(id, updateData, { new: true });
    }

    async deleteCliente(id) {
        try {
            const result = await Cliente.findByIdAndDelete(id);
            if (!result) {
                throw new Error('Cliente no encontrado');
            }
            return result;
        } catch (error) {
            console.error('Error en servicio al eliminar cliente:', error);
            throw error; 
        }
    }

}

module.exports = new clienteService();
