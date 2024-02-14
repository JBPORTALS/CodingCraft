import { Navbar } from ".";

interface WithNavbarProps {
  children: React.ReactComponentElement<any>;
}

export default function WithNavbar({ children }: WithNavbarProps) {
  return (
    <div className="flex flex-col justify-center px-4 sm:px-16 md:px-20">
      <Navbar />
      {children}
    </div>
  );
}
