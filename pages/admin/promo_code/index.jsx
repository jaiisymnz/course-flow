import React, { useState, useEffect } from "react";
import Sidebar from "@/components/admin/AdminSidebar";
import AdminHeaderbar from "@/components/admin/AdminHeaderbar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import axios from "axios";
import formatDate from "@/utils/formatDate";

const AdminPanelPromoCode = () => {
  const [promoCodes, setPromoCodes] = useState([]);
  const [filteredPromoCodes, setFilteredPromoCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPromoCodes = async () => {
      try {
        const { data } = await axios.get("/api/admin/promo_codes");
        setPromoCodes(data);
        setFilteredPromoCodes(data);
      } catch (err) {
        console.error("Error fetching promo codes:", err);
        setError("Failed to load promo codes.");
      } finally {
        setLoading(false);
      }
    };

    fetchPromoCodes();
  }, []);

  const handleSearch = (results) => {
    setFilteredPromoCodes(results);
  };

  const handleDelete = (id) => {
    console.log("Delete promo code with id:", id);
  };

  const handleEdit = (id) => {
    console.log("Edit promo code with id:", id);
  };

  const renderTableHeaders = () => {
    const headers = [
      "Promo Code",
      "Minimum Purchase (THB)",
      "Discount Type",
      "Courses Included",
      "Created Date",
      "Action",
    ];
    return headers.map((header) => (
      <th key={header} className="p-2 text-[#424C6B] font-normal">
        {header}
      </th>
    ));
  };

  const renderTableBody = () => {
    if (filteredPromoCodes.length === 0) {
      return (
        <tr>
          <td colSpan="6" className="text-center p-4 text-gray-500">
            No promo codes found.
          </td>
        </tr>
      );
    }

    return filteredPromoCodes.map((promoCode) => (
      <tr key={promoCode.promo_code_id} className="hover:bg-[#F6F7FC]">
        <td className="p-4 border-t border-[#F1F2F6]">{promoCode.code}</td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {promoCode.min_price.toLocaleString()}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {promoCode.discount_type}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {promoCode.course_name || "All Courses"}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          {formatDate(promoCode.created_at)}
        </td>
        <td className="p-4 border-t border-[#F1F2F6]">
          <button className="mr-2 hover:scale-110">
            <TrashIcon />
          </button>
          <button className="hover:scale-110">
            <EditIcon />
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-[#F6F7FC]">
        <AdminHeaderbar
          title="Promo Code"
          buttonLabel="+ Add Promo Code"
          apiEndpoint="/api/promo_codes"
          searchParam="code"
          onSearch={handleSearch}
          navigatePath="/admin/add_promo_code"
        />
        <div className="p-6">
          {loading && (
            <div className="absolute inset-0 bg-[#FFFFFF] bg-opacity-80 flex items-center justify-center z-10">
              <div className="loader border-t-4 border-[#2F5FAC] w-12 h-12 rounded-full animate-spin"></div>
            </div>
          )}
          {error && <div className=" text-center">{error}</div>}
          {!loading && !error && (
            <table className="w-[80vw] text-left borde m-8 rounded-lg overflow-hidden shadow-sm">
              <thead className="bg-[#E4E6ED]">
                <tr>{renderTableHeaders()}</tr>
              </thead>
              <tbody className="bg-[#FFFFFF]">{renderTableBody()}</tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPromoCode;
