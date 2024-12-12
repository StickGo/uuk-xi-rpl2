import React from 'react';
import Navbar from '../components/Navbar'; // Pastikan path ini sesuai dengan lokasi Navbar
import Sidebar from '../components/Sidebar';
import { Trash2, Pencil } from 'lucide-react'; // Import the trash icon
import Link from 'next/link';

const InventoryPage = () => {
  const inventory = [
    { productName: 'Table', seriesNo: 'TJ0001', items: 25, purchaseDate: '11 Januari 2022', unitPrice: '450.000' },
    { productName: 'Chair', seriesNo: 'TJ0002', items: 66, purchaseDate: '11 Januari 2022', unitPrice: '325.000' },
    { productName: 'Laptop', seriesNo: 'TJ0015', items: 120, purchaseDate: '21 Juni 2022', unitPrice: '11.750.000' },
    { productName: 'Monitor', seriesNo: 'TJ1212', items: 20, purchaseDate: '15 April 2022', unitPrice: '12.335.000' },
    { productName: 'Keyboard', seriesNo: 'TJ0021', items: 15, purchaseDate: '24 Desember 2024', unitPrice: '357.600' },
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Layout dengan Sidebar dan Konten */}
      <div className="flex">
        <Sidebar />
        <div className="p-6 bg-gray-50 flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-4xl font-semibold text-sky-950">Inventory</h1>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-6">
              <Link href="/DataAssetUser">
                <h1 className="text-sky-950 text-2xl font-semibold underline underline-offset-8 cursor-pointer decoration-3">
                  All
                </h1>
              </Link>
              <Link href="/DataAssetAdmin">
                <h1 className="text-sky-950 text-2xl font-semibold">Warehouse</h1>
              </Link>
            </div>
            <button className="px-6 py-1 text-customBlue rounded-md border-customBlue border hover:bg-blue-700 transition-colors">
              Add
            </button>
          </div>

          <div className="bg-white rounded-lg shadow">
            <table className="w-full pt-4">
              <thead>
                <tr className="border-b pb-6 bg-slate-300 py-6">
                  <th className="px-3 py-3 text-left font-bold text-customBlue"></th>
                  <th className="px-3 py-3 text-left font-bold text-customBlue">Product Name</th>
                  <th className="px-3 py-3 text-left font-bold text-customBlue">Series No.</th>
                  <th className="px-3 py-3 text-left font-bold text-customBlue">Items</th>
                  <th className="px-3 py-3 text-left font-bold text-customBlue">Purchase Date</th>
                  <th className="px-3 py-3 text-left font-bold text-customBlue">Unit Price</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <Pencil className="cursor-pointer ml-3 mr-6" />
                        <Trash2 className="cursor-pointer ml-12" />
                      </div>
                    </td>
                    <td className="px-3 py-4">{item.productName}</td>
                    <td className="px-3 py-4">{item.seriesNo}</td>
                    <td className="px-3 py-4">{item.items}</td>
                    <td className="px-3 py-4">{item.purchaseDate}</td>
                    <td className="px-3 py-4">{item.unitPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
