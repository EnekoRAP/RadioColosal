const Cliente = require('../models/cliente');

class clienteService {

    // Operaciones CRUD
    async createCliente(data) {
        const cliente = new Cliente(data);
        await cliente.save();
        return cliente;
    }

    async getClientes() {
        return await Cliente.find();
    }

    async getClienteById(id) {
        return await Cliente.findById(id);
    }

    async updateCliente(id, data) {
        return await Cliente.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteCliente(id) {
        return await Cliente.findByIdAndDelete(id);
    }

}

module.exports = new clienteService();