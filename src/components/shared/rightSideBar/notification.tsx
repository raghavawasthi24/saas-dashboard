export default function Notifications() {
  const notifications = [
    {
      icon: "/assets/notification/bug.png",
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      icon: "/assets/notification/user.png",
      text: "New user registered",
      time: "59 minutes ago",
    },
    {
      icon: "/assets/notification/bug.png",
      text: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      icon: "/assets/notification/lane.png",
      text: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];
  return (
    <section>
      <p className="mb-4 font-semibold">Notifications</p>
      <div className="flex flex-col gap-4">
        {notifications.map((notification) => {
          return (
            <div className="flex items-start gap-2">
              <img src={notification.icon} alt="" className="w-6 h-6" />
              <div className="flex flex-col">
                <p>{notification.text}</p>
                <p className="text-sm text-[#1C1C1C66]">{notification.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
