import { contacts } from "../../../constants/notificationBar";

/**
 * Contact component.
 * Displays a list of contacts with profile images and names.
 */
export default function Contact() {
  return (
    <section aria-label="Contacts">
      {/* Section title */}
      <p className="mb-4 font-semibold">Contacts</p>

      <div className="flex flex-col gap-4">
        {contacts.map((contact, index) => (
          <div key={index} className="flex items-center gap-2">
            <img
              src={contact.profile}
              alt=""
              className="w-6 h-6 flex-shrink-0 rounded-full"
              aria-hidden="true"
              loading="lazy"
            />
            <p>{contact.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
