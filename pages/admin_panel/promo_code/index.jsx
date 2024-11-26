import React from "react";
import Sidebar from "@/components/AdminSidebar";
import { TrashIcon, EditIcon } from "@/assets/icons/admin_icon/adminIcon";
import AdminHeaderbar from "@/components/AdminHeaderbar";
import { useState } from "react";

const promoCodes = [
  {
    id: 1,
    code: "NEWYEAR200",
    min_price: 0,
    discount_type: "Fixed amount",
    courses_included: "All",
    created_date: "12/02/2022 10:30PM",
  },
  {
    id: 2,
    code: "MERRYX25",
    min_price: 1200,
    discount_type: "Fixed amount",
    courses_included: "Service Design Essentials",
    created_date: "12/02/2022 10:30PM",
  },
  {
    id: 3,
    code: "BDAY2025",
    min_price: 0,
    discount_type: "Percent",
    courses_included: "Software Developer",
    created_date: "12/02/2022 10:30PM",
  },
  {
    id: 4,
    code: "NEWMEMBER",
    min_price: 0,
    discount_type: "Fixed amount",
    courses_included: "UX/UI Design Beginner",
    created_date: "12/02/2022 10:30PM",
  },
];

const adminPanelPromoCode = () => {
  const [filteredPromoCodes, setFilteredPromoCodes] = useState(promoCodes);

  const handleSearch = (results) => {
    setFilteredPromoCodes(results);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 bg-gray-100">
        <AdminHeaderbar
          title="Promo Code"
          buttonLabel="+ Add Course"
          data={promoCodes}
          onSearch={handleSearch}
        />
        <div className="p-6">
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
              {filteredPromoCodes.map((promoCode) => (
                <tr key={promoCode.id} className="hover:bg-gray-50">
                  <td className="p-2 border-t">{promoCode.code}</td>
                  <td className="p-2 border-t">{promoCode.min_price}</td>
                  <td className="p-2 border-t">{promoCode.discount_type}</td>
                  <td className="p-2 border-t">{promoCode.courses_included}</td>
                  <td className="p-2 border-t">{promoCode.created_date}</td>
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
