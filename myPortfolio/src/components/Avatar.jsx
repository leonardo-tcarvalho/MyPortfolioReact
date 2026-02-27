import AvatarImage from "../images/Avatar2.jpeg";

export function Avatar() {
  return (
    <div className="avatar-ring">
      <div className="w-28 h-28 rounded-[1.1rem] overflow-hidden bg-white dark:bg-slate-900">
        <img
          className="w-full h-full object-cover"
          src={AvatarImage}
          alt="Leonardo Carvalho"
        />
      </div>
    </div>
  );
}
