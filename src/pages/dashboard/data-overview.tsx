import { overviewData } from "../../constants/dashboard";

export default function Numbers() {
  return (
    <div className="w-full md:w-1/2 grid sm:grid-cols-2 gap-6">
      {overviewData.map((item) => {
        return (
          <div
            className={`${
              item.category === "Customers"
                ? "bg-[#E3F5FF] text-black"
                : item.category === "Growth"
                ? "bg-[#E5ECF6] text-black"
                : "bg-secondary"
            } w-full p-6 flex flex-col justify-center gap-2 rounded-xl`}
          >
            <p className="font-semibold text-[clamp(0.8rem,1.0vw,1.5rem)]">
              {item.category}
            </p>
            <div className="flex justify-between items-center gap-12">
              <span className="font-medium text-[clamp(1.2rem,1.5vw,2rem)]">
                {item.value}
              </span>
              <span className="font-light text-[clamp(0.6rem,0.9vw,0.9rem)]">
                {item.changePercentage}%
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
