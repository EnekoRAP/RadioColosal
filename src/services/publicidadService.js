const Publicidad = require('../models/publicidad');

class publicidadService {

    async createPublicidad(data) {
        const publicidad = new Publicidad(data);
        await publicidad.save();
        return publicidad;
    }

    async getPublicidades() {
        return await Publicidad.find();
    }

    async getPublicidadById(id) {
        return await Publicidad.findById(id);
    }

    async updatePublicidad(id, data) {
        return await Publicidad.findByIdAndUpdate(id, data, { new: true })
    }

    async deletePublicidad(id) {
        return await Publicidad.findByIdAndDelete(id);
    }

}

module.exports = new publicidadService();
