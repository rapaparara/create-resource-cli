module.exports = (resourceName, fields) => {
   const sequelizeDataTypes = {
      number: 'INTEGER',
      string: 'STRING',
      date: 'DATE',
      boolean: 'BOOLEAN',
      array: 'ARRAY',
      object: 'JSON',
   }

   return `
import { DataTypes } from 'sequelize';
import sequelize from '../../../../db/index.js';

export default sequelize.define(
  '${resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}',
  {${fields
     .map(
        ({ name, type, isPrimary }) => `
    ${name}: {
      type: DataTypes.${sequelizeDataTypes[type] || 'STRING'},
      ${isPrimary ? 'primaryKey: true,' : ''}
      allowNull: false,
    },`
     )
     .join('')}
  },
);
`
}
