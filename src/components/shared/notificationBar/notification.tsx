import { notifications } from "../../../constants/notificationBar";

/**
 * Notifications component.
 * Displays a vertical list of notifications with icons, text, and timestamps.
 */
export default function Notifications() {
  return (
    <section aria-label="Notifications">
      {/* Section title */}
      <p className="mb-4 font-semibold">Notifications</p>

      <div className="flex flex-col gap-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start gap-2">
            <img
              src={notification.icon}
              alt=""
              className="w-6 h-6 flex-shrink-0"
              aria-hidden="true"
              loading="lazy"
            />
            <div className="flex flex-col">
              <p>{notification.text}</p>
              {/* Time of notification */}
              <p className="text-sm text-muted-foreground">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
