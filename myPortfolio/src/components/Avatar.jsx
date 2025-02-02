import AvatarImage from "../images/Avatar2.jpeg";

export function Avatar() {
  return (
    <div className="flex items-endrelative max-lg:w-52 max-lg:h-52 w-36 h-36 mt-5 rounded-3xl shadow-10 bg-cover object-center">
      <img className="rounded-2.5xl drop-shadow-10" src={AvatarImage} alt="" />
    </div>
  );
}
