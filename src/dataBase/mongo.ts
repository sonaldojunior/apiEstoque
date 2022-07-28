// vamos conectar o banco aqui e exportar para usar no server
import { connect } from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const mongoConnect = async()=>{
    try{
        console.log("conectando ao mongoDB...");
        await connect(process.env.MONGO_URL as string);
        console.log("mongoDB conectado com sucesso");
    }catch(error){
        console.log("Erro de conexão", error)
    }

}