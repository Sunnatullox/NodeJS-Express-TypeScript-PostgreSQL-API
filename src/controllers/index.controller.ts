import{Request, Response} from 'express'
import { QueryResult } from "pg";
import { pool } from "../database";

export const getUsers =  async (req:Request,res:Response): Promise<Response> =>{
    try{
        const response:QueryResult = await pool.query('SELECT * FROM users');
        return res.status(200).json(response.rows)
    }catch(e){
        console.log(e)
        return res.status(500).json('Server Error');
    }
}


export const getUserbyId = async (req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id)
    const response:QueryResult = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    return res.json(response.rows)
}

export const createUsers = async(req:Request,res:Response):Promise<Response> =>{
    const { name, email } = req.body
    const response:QueryResult = await pool.query('INSERT  INTO users  (name, email) VALUES ($1, $2)',[name, email])    
    return res.json({
        messege:'User create Successfully',
        body:{
            user:{
                name,
                email
            }
        }
    })
}

export const updateUsers = async(req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id);
    const {name, email}= req.body;

    await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);
    return res.json(`User id ${id} updated Successfully`)
}

export const deleteUsers = async(req:Request,res:Response):Promise<Response> =>{
    const id = parseInt(req.params.id);
    await  pool.query('DELETE FROM users WHERE id = $1', [id]);
    return res.json(`User ${id} delete Successfully`)
}