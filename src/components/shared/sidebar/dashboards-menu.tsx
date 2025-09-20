import Collapsible from "../../ui/collapsible";

export default function DashboardMenu() {
  const content = [
    {
      icon: "/assets/default.png",
      text: "Default",
      isCollapsible: false,
    },
    {
      icon: "/assets/eCommerce.png",
      text: "eCommerce",
      isCollapsible: true,
    },
    {
      icon: "/assets/projects.png",
      text: "Projects",
      isCollapsible: true,
    },
    {
      icon: "/assets/courses.png",
      text: "Online Courses",
      isCollapsible: true,
    },
  ];
  return (
    <div className="">
      <p className="mb-2 text-[#1C1C1C66]">Dashboards</p>

      <div className="flex flex-col">
        {content.map((item) => {
          return item.isCollapsible ? (
            <Collapsible icon={item.icon} text={item.text} />
          ) : (
            <div className="p-1 pl-5 flex items-center cursor-pointer hover:bg-[#1C1C1C0D] rounded-lg">
              <img src={item.icon} alt="" className="ml-2 w-5 h-5" />
              <p className="ml-1">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
