import { Avatar, AvatarImage } from "../../ui/avatar";

export default function Profile() {
  return (
    <div className="flex items-center text-semibold gap-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <p>ByeWind</p>
    </div>
  );
}
