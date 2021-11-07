import {Validate as DoValidate} from '@xtareq/validator'
import { Request, Response, NextFunction } from "express"

export function Validate(fields:string[]){
    return function(target:any, propertyKey:string, descriptor:PropertyDescriptor){
        let original = descriptor.value
        descriptor.value = function(req:Request,res:Response, next: NextFunction){
            let errors:string[] = DoValidate(fields,req.body);
            if(errors.length > 0){
                return res.status(400).json({errors:errors})
            }
           return original.apply(this,arguments)
        }

        return descriptor
        
    }

}