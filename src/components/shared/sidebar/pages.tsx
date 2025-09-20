import Collapsible from "../../ui/collapsible";

export default function Pages() {
  const content = [
    {
      icon: "/assets/user-profile.png",
      text: "User Profile",
      isCollapsible: true,
      options: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
    },
    {
      icon: "/assets/account.png",
      text: "Account",
      isCollapsible: true,
      options: ["Profile", "Billing"]
    },
    {
      icon: "/assets/corporate.png",
      text: "Corporate",
      isCollapsible: true,
    },
    {
      icon: "/assets/blog.png",
      text: "Blog",
      isCollapsible: true,
    },
    {
      icon: "/assets/social.png",
      text: "Social",
      isCollapsible: true,
    },
  ];
  return (
    <div className="">
      <p className="mb-2 text-muted-foreground">Pages</p>

      <div className="flex flex-col">
        {content.map((item) => {
          return item.isCollapsible ? (
            <Collapsible icon={item.icon} text={item.text} options={item.options}/>
          ) : (
            <div className="p-1 pl-5 flex items-center cursor-pointer hover:bg-[#1C1C1C0D]">
              <img src={item.icon} alt="" className="ml-2 w-5 h-5" />
              <p className="ml-1">{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
