module.exports = (resourceName, fields) => `
import Joi from 'joi';

export const ${resourceName}Schema = Joi.object({${fields
   .map(({ name, type, isPrimary, validation }) => {
      const baseValidation =
         type === 'string' ? 'string' : type === 'number' ? 'number' : 'any'
      const primaryValidation = isPrimary ? `.required()` : ''
      const additionalValidation = validation
         ? `.${validation.replace(/\|/g, '.')}`
         : ''

      return `
  ${name}: Joi.${baseValidation}()${primaryValidation}${additionalValidation}.messages({
    "${baseValidation}.base": "${
         name.charAt(0).toUpperCase() + name.slice(1)
      } harus berupa ${type}",
    "${baseValidation}.empty": "${
         name.charAt(0).toUpperCase() + name.slice(1)
      } tidak boleh kosong",
    "any.required": "${
       name.charAt(0).toUpperCase() + name.slice(1)
    } adalah field yang wajib diisi"
  })`
   })
   .join(',')}
}).unknown(true);
`
