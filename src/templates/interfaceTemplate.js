module.exports = (resourceName) => `
import { dataSchema } from './validation.js';
import DataModel from './model.js';
import { generateUUID } from '../../../lib/uuid.js';
import { Op } from 'sequelize';

export const getAllData = async (query) => {
   try {
      const attributes = DataModel.getAttributes();
      const searchableFields =
         typeof attributes === 'string'
            ? attributes.split(',')
            : Object.keys(attributes);

      const filters = Object.fromEntries(
         Object.entries(query)
            .filter(([key]) => !['search', 'page', 'per_page'].includes(key))
            .map(([key, value]) => [key, value])
      );

      const searchFilter =
         query.search && searchableFields.length > 0
            ? {
                 [Op.or]: searchableFields.map((field) => ({
                    [field]: { [Op.like]: \`%\${query.search}%\` },
                 })),
              }
            : {};

      const page = parseInt(query.page, 10) || 1;
      const per_page = parseInt(query.per_page, 10) || 10;
      const offset = (page - 1) * per_page;

      const where = { ...filters, ...searchFilter };

      const [dataList, total] = await Promise.all([
         DataModel.findAll({ where, limit: per_page, offset,order: [['updatedAt', 'DESC']], }), 
         DataModel.count({ where }),
      ]);

      return { dataList, total };
   } catch (error) {
      throw new Error('Gagal mengambil data ${resourceName}.');
   }
};

export const getDataByUuid = async (uuid) => {
   try {
      const data = await DataModel.findOne({ where: { uuid } });
      if (!data) {
         throw new Error('Data ${resourceName} dengan UUID ini tidak ditemukan.');
      }
      return data;
   } catch (error) {
      throw new Error('Gagal mengambil data ${resourceName} berdasarkan UUID.');
   }
};

export const createData = async (data) => {
   const { error } = dataSchema.validate(data);
   if (error) {
      throw new Error(error.details[0].message);
   }

   try {
      const uuid = generateUUID();
      const newData = { ...data, uuid };
      const createdData = await DataModel.create(newData);
      return createdData;
   } catch (error) {
      throw new Error('Gagal membuat data ${resourceName}.');
   }
};

export const updateData = async (uuid, data) => {
   const { error } = dataSchema.validate(data);
   if (error) {
      throw new Error(error.details[0].message);
   }

   try {
      const [updated] = await DataModel.update(data, { where: { uuid } });
      if (!updated) {
         throw new Error('Data ${resourceName} tidak ditemukan atau tidak ada perubahan.');
      }
      return updated;
   } catch (error) {
      throw new Error('Gagal memperbarui data ${resourceName}.');
   }
};

export const deleteData = async (uuid) => {
   try {
      const deleted = await DataModel.destroy({ where: { uuid } });
      if (!deleted) {
         throw new Error('Data ${resourceName} tidak ditemukan.');
      }
      return deleted;
   } catch (error) {
      throw new Error('Gagal menghapus data ${resourceName}.');
   }
};
`
