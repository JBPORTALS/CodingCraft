import MyNavLink from "./MyNavLink";

export default function Navbar() {
  return (
    <div className="h-16 flex items-center justify-between px-20 w-full border-b border-b-slate-300">
      <img className="h-6 w-6" src="/vite.svg" />
      <ul className="flex gap-5 text-base font-medium">
        <MyNavLink to={"/"}>Home</MyNavLink>
        <MyNavLink to={"/about"}>About</MyNavLink>
      </ul>
    </div>
  );
}
