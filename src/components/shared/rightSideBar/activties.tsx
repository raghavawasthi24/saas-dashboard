export default function Activities() {
  const activities = [
    {
      icon: "/assets/activities/user1.png",
      text: "You have a bug that needs...",
      time: "Just now",
    },
    {
      icon: "/assets/activities/user2.png",
      text: "Released a new version",
      time: "59 minutes ago",
    },
    {
      icon: "/assets/activities/user3.png",
      text: "Submitted a bug.",
      time: "12 hours ago",
    },
    {
      icon: "/assets/activities/user4.png",
      text: "Modified A data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      icon: "/assets/activities/user5.png",
      text: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];
  return (
    <section>
      <p className="mb-4 font-semibold">Activities</p>
      <div className="flex flex-col gap-4">
        {activities.map((activity) => {
          return (
            <div className="flex items-start gap-2">
              <img src={activity.icon} alt="" className="w-6 h-6" />
              <div className="flex flex-col">
                <p>{activity.text}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
