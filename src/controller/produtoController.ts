import {Request, Response} from 'express';
import produto from '../model/produto';

export const home = async(req:Request, res:Response)=>{
    res.render('index')
}

export const createProduct = async(req:Request, res:Response)=>{
   let {material, medida, quantidade}= req.body
    let newProduct = await produto.create({
        material, medida, quantidade
    })
    res.status(201)
    res.json({ id: newProduct.id, material, medida, quantidade});
     
}

export const stockList = async(req:Request, res:Response)=>{
    let list = await produto.find({})
    res.json({list}) 
} 
export const stockItem = async(req:Request, res:Response)=>{
    let {id} = req.params;
    let materialItem = await produto.findById(id)
    if(materialItem){
        res.json({materialItem})
    }else{
        res.json({error:'material não encontrado, verifique se o ID está correto'})
    }
    
}

export const stockUpdate = async(req:Request, res:Response)=>{
  /* await produto.findByIdAndUpdate(
    req.params.id,{
        material:req.body.material,
        medida:req.body.medida,
        quantidade: req.body.quantidade
    } //essa alternativa está correta
   )*/
   //esa alternativa debaixo está detalhada e com condições para poder retornar algo
    let {id}= req.params;
    let {material, medida, quantidade}= req.body;
    let produtoUpdate= await produto.findById(id)
    if(produtoUpdate){
        await produto.findByIdAndUpdate(
            req.params.id,{
                material:material,
                medida:medida,
                quantidade:quantidade
            }
           )
           res.json({id:'produto atualizado com sucesso'})
    }else{
        res.json({id: 'produto não contem no banco de dados, confira o id novamente'})
    }
};

export const removeItem = async(req:Request, res:Response)=>{
    let { id }= req.params;
    let produtoDelete = await produto.findById(id)
    if(produtoDelete){       
       await produtoDelete.remove();
       res.json({id:"produto deletado com sucesso"})
   }else{
       res.json({id: 'produto não encontrado, verifique a chave id'})
   }
}
