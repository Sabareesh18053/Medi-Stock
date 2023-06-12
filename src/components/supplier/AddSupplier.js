import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";
import SupplierService from "../../services/SupplierService";

const AddSupplier = () =>{
    const [supplier, setSupplier] = useState({
        id:"",
        SuppName:"",
        emailId:"",
    });
}

const nav = useNavigate();

const handleChange = (s) => {
    const value = s.target.value;
    setSupplier({...supplier,[s.target.name]: value});
};

const saveSupplier = (s) => {
    s.preventDefault();
    SupplierService.saveSupplier(supplier)
    .then((response) => {
        console.log(response);
        nav("/supplierList");
    })
    .catch((error)=>{
        console.log(error);
    });
};

const reset = (s) => {
    s.preventDefault();
    setSupplier({
        id:"",
        SuppName:"",
        emailId:"",
    });
};

return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Supplier</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Supplier Name
          </label>
          <input
            type="text"
            name="SuppName"
            value={supplier.SuppName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
       
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={supplier.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveSupplier}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSupplier;
