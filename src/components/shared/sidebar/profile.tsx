import { Avatar, AvatarImage } from "../../ui/avatar";

// displays user image and name
export default function Profile() {
  return (
    <div className="flex items-center text-semibold gap-2">
      <Avatar>
        <AvatarImage src="/assets/avatar.png" />
      </Avatar>
      <p>ByeWind</p>
    </div>
  );
}
