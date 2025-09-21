import RevenueLocation from "./revenue-by-location";
import Numbers from "./data-overview";
import { Projection } from "./projection-graph";
import { Revenue } from "./revenue-graph";
import { TotalSales } from "./toalSales";
import TopProducts from "./top-selling-products";

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <p>eCommerce</p>
      <div className="flex flex-col md:flex-row gap-6">
        <Numbers />
        <Projection />
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <Revenue />
        <RevenueLocation/>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <TopProducts />
        <TotalSales />
      </div>
    </div>
  );
}
