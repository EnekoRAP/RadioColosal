const Locutor = require('../models/locutor');

class locutorService {

    // Crear locutor
    async createLocutor(data) {
        const redSocial = {
            facebook: data.redSocial?.facebook || '',
            instagram: data.redSocial?.instagram || ''
        };

        const locutor = new Locutor({
            nombre: data.nombre,
            biografia: data.biografia,
            idProgramas: data.idProgramas,
            redSocial: redSocial
        });

        await locutor.save();
        return locutor;
    }

    // Obtener todos los locutores
    async getLocutores() {
        return await Locutor.find().populate('idProgramas');
    }

    // Obtener locutor por ID
    async getLocutorById(id) {
        return await Locutor.findById(id).populate('idProgramas');
    }

    // Actualizar locutor
    async updateLocutor(id, updateData) {
        return await Locutor.findByIdAndUpdate(id, updateData, { new: true });
    }

    // Eliminar locutor
    async deleteLocutor(id) {
        try {
            const result = await Locutor.findByIdAndDelete(id);
            if (!result) {
                throw new Error('Locutor no encontrado');
            }
            return result;
        } catch (error) {
            console.error('Error en servicio al eliminar locutor:', error);
            throw error;
        }
    }

}

module.exports = new locutorService();
