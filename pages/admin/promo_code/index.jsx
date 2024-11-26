import React from "react";
import Sidebar from "@/components/admin/AdminSidebar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import AdminHeaderbar from "@/components/admin/AdminHeaderbar";
import { useState, useEffect } from "react";
import axios from "axios";
import formatDate from "@/utils/formatDate";

const adminPanelPromoCode = () => {
  const [allPromoCodes, setAllPromoCodes] = useState([]);
  const [filteredPromoCodes, setFilteredPromoCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/promo_codes");
        setAllPromoCodes(response.data);
        setFilteredPromoCodes(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load courses.");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (results) => {
    setFilteredPromoCodes(results);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <AdminHeaderbar
          title="Promo Code"
          buttonLabel="+ Add Promo code"
          apiEndpoint="/api/promo_codes"
          searchParam="code"
          onSearch={handleSearch}
          navigatePath="/admin/add_promo_code"
        />
        <div className="p-6">
          {loading && (
            <div className="absolute inset-0 bg-white bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-blue-500 w-12 h-12 rounded-full animate-spin"></div>
            </div>
          )}
          <table className="w-11/12 text-left border border-gray-200 m-8 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-300">
                <th className="p-2 ">Promo code</th>
                <th className="p-2 ">Minimum purchase (THB)</th>
                <th className="p-2 ">Discount type</th>
                <th className="p-2 ">Courses Included</th>
                <th className="p-2 ">Created date</th>
                <th className="p-2 ">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {filteredPromoCodes.map((promoCode, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border-t">{promoCode.code}</td>
                  <td className="p-2 border-t">
                    {promoCode.min_price.toLocaleString()}
                  </td>
                  <td className="p-2 border-t">{promoCode.discount_type}</td>
                  <td className="p-2 border-t">{promoCode.course_name}</td>
                  <td className="p-2 border-t">
                    {formatDate(promoCode.created_at)}
                  </td>
                  <td className="p-2 border-t">
                    <button className="mr-2 hover:scale-110">
                      <TrashIcon />
                    </button>
                    <button className="hover:scale-110">
                      <EditIcon />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default adminPanelPromoCode;
