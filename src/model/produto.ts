// é criado um Model para cada collection
import{Schema, model, Model,connection} from 'mongoose';

type UserType={
    material:string,
    medida:number,
    quantidade:number
};

const schema = new Schema<UserType>({
    material: {type:String, required:true},
    medida: {type:Number, required:true},
    quantidade: {type:Number, required:true}
})

const modelName:string = 'produto';

export default (connection && connection.models[modelName])?
    connection.models[modelName] as Model<UserType>
:
    model<UserType>(modelName, schema)
;