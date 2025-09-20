import Numbers from "./numbers";
import { Projection } from "./projection";
import { Revenue } from "./revenue";

export default function Dashboard() {
  return (
    <div className="p-6 flex flex-col gap-6">
      <p>eCommerce</p>
      <div className="flex gap-6">
        <Numbers />
        <Projection/>
      </div>
      <div className="flex gap-6">
        <Revenue/>
      </div>
    </div>
  );
}
