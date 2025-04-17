const Noticia = require('../models/noticia');

class noticiaService {

    // Operaciones CRUD
    async createNoticia(data) {
        const noticia = new Noticia(data);
        await noticia.save();
        return noticia;
    }

    async getNoticias() {
        return await Noticia.find();
    }


    async getNoticiaById(id) {
        return await Noticia.findById(id);
    }

    async updateNoticia(id, data) {
        return await Noticia.findByIdAndUpdate(id, data, { new: true })
    }

    async deleteNoticia(id) {
        return await Noticia.findByIdAndDelete(id);
    }

}

module.exports = new noticiaService();