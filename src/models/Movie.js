import { Schema, model , models} from "mongoose"; 

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, 'El titulo es requerido'],
        unique: true,
        trim: true,
    }, 
    age: {
        type: Number,
        required: [true, 'El ano es requerido'],
        trim: true,
    }, 
    director: {
        type: String,
        required: [true, 'El director es requerido'],
        trim: true,
    },
    actor: {
        type: String,
        required: [true, 'El actor es requerido'],
        trim: true,
    },
    resena: {
        type: String,
        required: [true, 'La resena es requerido'],
        trim: true,

    },
    image: {
        type: String,
        required: [true, 'El image es requerido'],
        trim: true,
    },
    trailer: {
        type: String,
        require: [true, 'El trailer es requerido'],
        trim: true,
    }
}, {
    timestamps: true,
})

export default models.Movies || model('Movies', movieSchema)