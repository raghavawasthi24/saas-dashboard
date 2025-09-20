export default function Conatct() {
  const contacts = [
    {
      profile: "/assets/contacts/natali.png",
      name: "Natali Craig",
    },
    {
      profile: "/assets/contacts/drew.png",
      name: "Drew Cano",
    },
    {
      profile: "/assets/contacts/orlando.png",
      name: "Orlando Diggs",
    },
    {
      profile: "/assets/contacts/andi.png",
      name: "Andi Lane",
    },
    {
      profile: "/assets/contacts/kate.png",
      name: "Kate Morrison",
    },
    {
      profile: "/assets/contacts/koray.png",
      name: "Koray Okumus",
    },
  ];
  return (
    <div>
      <p className="mb-4 font-semibold">Contacts</p>
      <div className="flex flex-col gap-4">
        {contacts.map((contact) => {
          return (
            <div className="flex items-center gap-2">
              <img src={contact.profile} alt="" className="w-6 h-6" />
              <p>{contact.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
