import jwt from "jsonwebtoken";

export const createToken = (payload:object,key:string,expiredIn:jwt.SignOptions)=>{
  return jwt.sign(payload,key,expiredIn)
}