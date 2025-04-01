const Comentario = require('../models/comentario');
const Oyente = require('../models/oyente');
const Programacion = require('../models/programacion');

class comentarioService {

    // Operaciones CRUD
    async createComentario(data) {
        const comentario = new Comentario(data);
        await comentario.save();

        const oyente = await Oyente.findById(data.idOyente);
        if (oyente) {
            oyente.comentarios = oyente.comentarios || [];
            oyente.comentarios.push(comentario._id);
            await oyente.save();
        }

        const programacion = await Programacion.findById(data.idPrograma);
        if (programacion) {
            programacion.comentarios = programacion.comentarios || [];
            programacion.comentarios.push(comentario._id);
            await programacion.save();
        }

        return comentario;
    }
    
    async getComentarios() {
        return await Comentario.find()
        .populate('idOyente') 
        .populate('idPrograma');
    }
    
    async getComentarioById(id) {
        return await Comentario.findById(id)
        .populate('idOyente')
        .populate('idPrograma');
    }
    
    async updateComentario(id, data) {
        return await Comentario.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteComentario(id) {
        const comentario = await Comentario.findByIdAndDelete(id);
        if (comentario) {
            
            const oyente = await Oyente.findById(comentario.idOyente);
            if (oyente) {
                oyente.comentarios = oyente.comentarios.filter(
                    postId => !postId.equals(comentario._id)
                );
                await oyente.save();
            }
            
            const programa = await Programa.findById(comentario.idPrograma);
            if (programa) {
                programa.comentarios = programa.comentarios.filter(
                    postId => !postId.equals(comentario._id)
                );
                await programa.save();
            }
        }
        
        return comentario;
    }

}

module.exports = new comentarioService();