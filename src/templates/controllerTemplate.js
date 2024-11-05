module.exports = (resourceName) => `
import * as dataService from './interface.js';
import {
   successResponse,
   errorResponse,
   paginateResponse,
} from '../../../lib/response.js';

export const getAllData = async (req, res) => {
   try {
      const { dataList, total } = await dataService.getAllData(req.query);

      const hasNoFilters =
         !req.query.search && !req.query.page && !req.query.per_page;

      if (hasNoFilters) {
         return successResponse(res, 'Berhasil mengambil list data ${resourceName}', dataList);
      }
      paginateResponse(
         req,
         res,
         'Berhasil mengambil list data ${resourceName}',
         dataList,
         total
      );
   } catch (error) {
      errorResponse(res, error.message);
   }
};

export const getDataByUuid = async (req, res) => {
   try {
      const { uuid } = req.params;
      const data = await dataService.getDataByUuid(uuid);
      successResponse(res, 'Berhasil mengambil data ${resourceName}', data);
   } catch (error) {
      errorResponse(res, error.message, 404);
   }
};

export const createData = async (req, res) => {
   try {
      const requestData = req.body;
      const newData = await dataService.createData(requestData);
      successResponse(res, 'Berhasil membuat data ${resourceName}', newData, 201);
   } catch (error) {
      errorResponse(res, error.message);
   }
};

export const updateData = async (req, res) => {
   try {
      const { uuid } = req.params;
      const requestData = req.body;
      const updatedData = await dataService.updateData(uuid, requestData);
      successResponse(res, 'Berhasil memperbarui data ${resourceName}', updatedData);
   } catch (error) {
      errorResponse(res, error.message);
   }
};

export const deleteData = async (req, res) => {
   try {
      const { uuid } = req.params;
      await dataService.deleteData(uuid);
      successResponse(res, 'Berhasil menghapus data ${resourceName}', null, 200);
   } catch (error) {
      errorResponse(res, error.message);
   }
};
`
