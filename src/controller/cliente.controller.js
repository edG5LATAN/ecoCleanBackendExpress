
import { pool } from '../db.js'

export const getCliente = async (req, res) => {
  try {
    const [resultado] = await pool.query('SELECT * FROM cliente')
    res.json(resultado)
  } catch (error) {
    return res.status(500).json({
      message: "somethings goes wrong"
    })
  }
}

export const postCliente = async (req, res) => {
  try {
    const { nombre, fecha, telefono, estado, nota, peso } = req.body
    const [resultado] = await pool.query('INSERT INTO CLIENTE(nombre,fecha,telefono,estado,nota ,peso) values(?,?,?,?,?,?)',
      [nombre, fecha, telefono, estado, nota, peso])
    res.send({
      id: resultado.insertId,
      nombre,
      fecha,
      telefono,
      estado,
      nota,
      peso
    })
  } catch (error) {
    return res.status(500).json({
      message: "somethings goes wrong"
    })
  }

}

export const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params
    const [resultado] = await pool.query('DELETE FROM cliente WHERE ID=?', [id]);
    if (resultado.affectedRows <= 0) {
      return res.status(404).json({
        message: 'cliente no encotrado'
      })
    }
    res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({
      message: "somethings goes wrong"
    })
  }
}

export const putCliente = async (req, res) => {
  try {
    
    const { nombre, fecha, telefono, estado, nota, peso ,id} = req.body
    const [resultado] = await pool.query('UPDATE cliente SET nombre=IFNULL(?,nombre),fecha=IFNULL(?,fecha),telefono=IFNULL(?,telefono),estado=IFNULL(?,estado),nota=IFNULL(?,nota),peso=IFNULL(?,peso) WHERE ID=?',
      [nombre, fecha, telefono, estado, nota, peso, id])
    if (resultado.affectedRows <= 0) {
      return res.status(404).json({
        message: 'cliente no encotrado'
      })
    }
    res.send(resultado)
  } catch (error) {
    return res.status(500).json({
      message: "somethings goes wrong"
    })
  }
}

export const getClienteId = async (req, res) => {
  const { id } = req.params
  try {
    const [resultado] = await pool.query('SELECT * FROM cliente WHERE ID=?', [id])
    if (resultado.length <=0 ) {
      return res.status(404).json({
        message: 'cliente no encotrado'
      })
    }
    res.send(resultado[0])
  } catch (error) {
    return res.status(500).json({
      message: "somethings goes wrong"
    })
  }
}