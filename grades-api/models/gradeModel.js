export default (mongoose) =>{

    const schema = mongoose.Schema({
        name:{
            type: String,
            required: true
        },
        subject:{
            type: String,
            required: true
        },
        type:{
            type: String,
            required: true
        },
        value:{
            type: Number,
            //required: true
        },
        lastModified:{
            type: Date,
            default: Date.now , 
        }
    });

    //serve para sobrescrever o _id, para que o front-end consiga identificá-lo para editar, deletar, encontrar um específico, etc. Isso se chama sobrescrita de método. No react o id se chama id, no mongodb ele se chama _id, por isso ele não o acha
    schema.method("toJSON", function() {
        const {__v,_id, ...object} = this.toObject();

        object.id = _id;

        return object
    })

    const Grade = mongoose.model('grades',schema,'grades');

    return Grade;
};