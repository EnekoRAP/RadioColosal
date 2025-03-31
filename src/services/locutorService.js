const Locutor = require('../models/locutor');
const Programacion = require('../models/programacion');

class locutorService {

    // Operaciones CRUD
    async createLocutor(data) {
        const locutor = new Locutor(data);
        await locutor.save();

        const programacion = await Programacion.findById(data.idProgramas);
        programacion.locutores.push(locutor._id);

        return locutor;
      }

      async getLocutores() {
        return await Locutor.find().populate('idProgramas');
      }

      async getLocutorById(id) {
        return await Locutor.findById(id);
      }

      async updateLocutor(id, data) {
        return await Locutor.findByIdAndUpdate(id, data, { new: true });
      }

      async deleteLocutor(id) {
         try {
            const locutor = await Locutor.findById(id);
            await Locutor.findByIdAndDelete(id);
            
            const programacion = await Programacion.findById(locutor.idProgramas);
            if (programacion) {
                programacion.locutores = programacion.locutores.filter(
                    postId => !postId.equals(locutor._id)
                );
                await programacion.save();
            }
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    }

}

module.exports = new locutorService();