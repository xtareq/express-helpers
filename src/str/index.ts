import bcrypt from 'bcryptjs'
export const isEmpty = (str:string)=>str === ""
export const randNumber= (from:number, to:number)=>Math.floor(Math.random()* (to-from + 1)+from)
export const makeHash = (password:string,salt=10)=>bcrypt.hashSync(password,salt)
export const checkHash=(password:string, hash:string)=>{
    return bcrypt.compareSync(password,hash)
}