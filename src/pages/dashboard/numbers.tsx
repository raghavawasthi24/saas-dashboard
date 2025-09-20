export default function Numbers() {
  const data = [
    {
      category: "Customers",
      value: "3,781",
      changePercentage: 11.01,
    },
    {
      category: "Orders",
      value: "1,219",
      changePercentage: -0.03,
    },
    {
      category: "Revenue",
      value: "$695",
      changePercentage: 15.03,
    },
    {
      category: "Growth",
      value: "30.1%",
      changePercentage: 6.08,
    },
  ];
  return (
    <div className="w-1/2 grid grid-cols-2 gap-6">
      {data.map((item) => {
        return (
          <div
            className={`${
              item.category === "Customers"
                ? "bg-[#E3F5FF]"
                : item.category === "Growth"
                ? "bg-[#E5ECF6]"
                : "bg-[#F7F9FB]"
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
