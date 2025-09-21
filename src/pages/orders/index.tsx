import { useState, useEffect, useMemo, useRef } from "react";
import { Calendar } from "lucide-react";
import { cn } from "../../lib/utils";
import { Orders } from "../../constants/orders";
import Pagination from "../../components/ui/pagination";
import Filters from "./filters";

const PAGE_SIZE = 10;

const columns = ["Order ID", "User", "Project", "Address", "Date", "Status"];

export default function OrderTable() {
  const [selected, setSelected] = useState<string[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [paginated, setPaginated] = useState<typeof Orders>([]);

  const selectAllRef = useRef<HTMLInputElement>(null);

  // Filter orders by search query
  const filtered = useMemo(
    () =>
      Orders.filter(
        (order) =>
          order.id.toLowerCase().includes(search.toLowerCase()) ||
          order.user.name.toLowerCase().includes(search.toLowerCase()) ||
          order.project.toLowerCase().includes(search.toLowerCase()) ||
          order.address.toLowerCase().includes(search.toLowerCase()) ||
          order.status.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);

  // Update paginated data when page or filtered changes
  useEffect(() => {
    const data = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
    setPaginated(data);
  }, [page, filtered]);

  // Reset to page 1 when search changes
  useEffect(() => {
    setPage(1);
  }, [search]);

  // Handle individual row select/deselect
  const handleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // Handle select/deselect all for current page
  const handleSelectAll = () => {
    if (paginated.every((order) => selected.includes(order.id))) {
      setSelected((prev) =>
        prev.filter((id) => !paginated.some((o) => o.id === id))
      );
    } else {
      setSelected((prev) => [
        ...prev,
        ...paginated.map((o) => o.id).filter((id) => !prev.includes(id)),
      ]);
    }
  };

  // Indeterminate state for "select all" checkbox
  useEffect(() => {
    if (!selectAllRef.current) return;
    const allChecked = paginated.every((o) => selected.includes(o.id));
    const noneChecked = paginated.every((o) => !selected.includes(o.id));
    selectAllRef.current.indeterminate = !allChecked && !noneChecked;
  }, [paginated, selected]);

  return (
    <div className="p-6">
      {/* Top controls */}
      <Filters search={search} setSearch={setSearch} />

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-[995px] w-full text-sm text-left font-light">
          <thead className="border-b font-extralight">
            <tr>
              <th className="px-3 py-2">
                <input
                  ref={selectAllRef}
                  type="checkbox"
                  checked={
                    paginated.length > 0 &&
                    paginated.every((order) => selected.includes(order.id))
                  }
                  onChange={handleSelectAll}
                  aria-label="Select all orders on this page"
                />
              </th>
              {columns.map((col, key) => (
                <th
                  className="px-3 py-2 font-light text-muted-foreground"
                  key={key}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginated.length > 0 ? (
              paginated.map((order) => (
                <tr key={order.id} className="group hover:bg-secondary">
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      className={cn(
                        "opacity-0 group-hover:opacity-100 transition-opacity",
                        selected.includes(order.id) && "opacity-100"
                      )}
                      checked={selected.includes(order.id)}
                      onChange={() => handleSelect(order.id)}
                      aria-label={`Select order ${order.id}`}
                    />
                  </td>
                  <td className="px-3 py-2">{order.id}</td>
                  <td className="px-3 py-2 flex items-center space-x-2">
                    <img
                      src={order.user.avatar}
                      alt={order.user.name}
                      className="w-7 h-7 rounded-full object-cover"
                      loading="lazy"
                    />
                    <span>{order.user.name}</span>
                  </td>
                  <td className="px-3 py-2">{order.project}</td>
                  <td className="px-3 py-2">{order.address}</td>
                  <td className="px-3 py-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
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
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="text-center py-4 text-muted-foreground"
                >
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
}
