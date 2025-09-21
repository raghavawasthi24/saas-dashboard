import { activities } from "../../../constants/notificationBar";

/**
 * Activities component.
 * Displays a list of recent activities with icons, descriptions, and timestamps.
 */
export default function Activities() {
  return (
    <section aria-label="Recent activities">
      {/* Section title */}
      <p className="mb-4 font-semibold">Activities</p>

      <div className="flex flex-col gap-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-2">
            <img
              src={activity.icon}
              alt=""
              className="w-6 h-6 flex-shrink-0"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="flex flex-col">
              <p>{activity.text}</p>
              {/* Time indicator */}
              <p className="text-sm text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
