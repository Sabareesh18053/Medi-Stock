import axios from "axios";

const SUPPLIER_API_BASE_URL = '';
//"http://localhost:8080/api/v1/suppliers";

class SupplierService {
  saveSupplier(supplier) {
    return axios.post(SUPPLIER_API_BASE_URL, supplier);
  }

  getSuppliers() {
    return axios.get(SUPPLIER_API_BASE_URL);
  }

  deleteSupplier(id) {
    return axios.delete(SUPPLIER_API_BASE_URL + "/" + id);
  }

  getSupplierById(id) {
    return axios.get(SUPPLIER_API_BASE_URL + "/" + id);
  }

  updateSupplier(supplier, id) {
    return axios.put(SUPPLIER_API_BASE_URL + "/" + id, supplier);
  }
}

export default new SupplierService();