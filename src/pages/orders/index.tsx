import React, { useState } from "react";

import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { cn } from "../../lib/utils";

import { Plus } from "lucide-react";
import { ListFilter } from "lucide-react";
import { ArrowDownUp } from "lucide-react";
import { Calendar } from "lucide-react";

// Dummy data (replace with your data source or fetch logic)
const orders = [
  {
    id: "#CM9801",
    user: { name: "Natali Craig", avatar: "/assets/contacts/andi.png" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
    statusColor: "bg-blue-400",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/assets/contacts/drew.png" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
    statusColor: "bg-green-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/assets/contacts/natali.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "bg-gray-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/assets/contacts/natali.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "bg-gray-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/assets/contacts/natali.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "bg-gray-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/assets/contacts/kate.png" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
    statusColor: "bg-sky-400",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/assets/contacts/koray.png" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
    statusColor: "bg-yellow-400",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/assets/contacts/natali.png" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
    statusColor: "bg-gray-400",
  },
  // Duplicate the above to demonstrate pagination
];

const PAGE_SIZE = 5;

export default function OrderTable() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filtered = orders.filter(
    (order) =>
      order.id.includes(search) ||
      order.user.name.toLowerCase().includes(search.toLowerCase()) ||
      order.project.toLowerCase().includes(search.toLowerCase()) ||
      order.address.toLowerCase().includes(search.toLowerCase()) ||
      order.status.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSelect = (id: string) => {
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id]
    );
  };

  const handleSelectAll = () => {
    if (paginated.every((o) => selected.includes(o.id))) {
      setSelected(selected.filter((id) => !paginated.some((o) => o.id === id)));
    } else {
      setSelected([
        ...selected,
        ...paginated.map((o) => o.id).filter((id) => !selected.includes(id)),
      ]);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4 space-x-4 bg-[#F7F9FB] p-2 rounded-lg">
        <div className="flex items-center gap-4">
          <Plus className="w-4 h-4 cursor-pointer" />
          <ListFilter className="w-4 h-4 cursor-pointer" />
          <ArrowDownUp className="w-4 h-4 cursor-pointer" />
        </div>

        <div className="relative w-40">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input type="text" placeholder="Search" className="h-7 pl-7" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left font-light">
          <thead className="border-b">
            <tr>
              <th className="px-3 py-2">
                <input
                  type="checkbox"
                  checked={
                    paginated.length > 0 &&
                    paginated.every((order) => selected.includes(order.id))
                  }
                  onChange={handleSelectAll}
                  className="accent-indigo-500"
                />
              </th>
              <th className="px-3 py-2 font-medium text-gray-700">Order ID</th>
              <th className="px-3 py-2 font-medium text-gray-700">User</th>
              <th className="px-3 py-2 font-medium text-gray-700">Project</th>
              <th className="px-3 py-2 font-medium text-gray-700">Address</th>
              <th className="px-3 py-2 font-medium text-gray-700">Date</th>
              <th className="px-3 py-2 font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="px-3 py-2">
                  <input
                    type="checkbox"
                    className="accent-indigo-500"
                    checked={selected.includes(order.id)}
                    onChange={() => handleSelect(order.id)}
                  />
                </td>
                <td className="px-3 py-2 text-gray-800">{order.id}</td>
                <td className="px-3 py-2 flex items-center space-x-2">
                  <img
                    src={order.user.avatar}
                    alt={order.user.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span>{order.user.name}</span>
                </td>
                <td className="px-3 py-2">{order.project}</td>
                <td className="px-3 py-2">{order.address}</td>
                <td className="px-3 py-2 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{order.date}</span>
                </td>
                <td className="px-3 py-2">
                  <span
                    className={cn(
                      "inline-block w-2 h-2 rounded-full mr-2",
                      order.statusColor
                    )}
                  />
                  <span
                    className={cn(
                      order.status === "Approved"
                        ? "text-yellow-600"
                        : order.status === "Complete"
                        ? "text-green-600"
                        : order.status === "Rejected"
                        ? "text-gray-500"
                        : order.status === "Pending"
                        ? "text-sky-600"
                        : "text-blue-600"
                    )}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex items-center justify-end space-x-2 mt-4">
        <Button
          variant="ghost"
          size="sm"
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
        >
          <ChevronLeft size={18} />
        </Button>
        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            variant={page === i + 1 ? "default" : "outline"}
            size="sm"
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="ghost"
          size="sm"
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        >
          <ChevronRight size={18} />
        </Button>
      </div>
    </div>
  );
}
