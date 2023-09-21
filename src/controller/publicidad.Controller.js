 import {pool} from '../db.js'

export const getAllPublicidad= async(req,res)=>{
  try {
    const [rows]= await pool.query('select * from publicidad')
  res.send(rows)
  } catch (error) {
    console.log(error)
  }
  
}

export const crearPublicidad=async(req,res)=>{
    const {empresa,imagen,enlace}=req.body
     try {
       const [respuesta]= await pool.query('insert into publicidad(empresa,imagen,enlace) values(?,?,?)',[empresa,imagen,enlace])
    
       if(respuesta.insertId>0){
         const id=respuesta.insertId
         const [rows]= await pool.query('select * from publicidad where id=?',[id])
         return res.send(rows)
      }
    
      res.status(500).json({
      message:"error en el sistema"
     })
    } catch (error) {
      console.log(error)
    }
 

}

export const borrarPublicidad=async(req,res)=>{
 const {id}= req.params
try {
  const resultado=await pool.query('delete from publicidad where id=?',[id])
  res.send(resultado)
} catch (error) {
  console.log(error)
}
}

