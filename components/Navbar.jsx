import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav ClassName="py-4 md:py-6 border-b">
      <div ClassName="container mx-auto flex items-center justify-between gap-x-6">
        <Logo />
      </div>
    </nav>
  );
};

export default Navbar;
