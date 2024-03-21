import { ModeToggle } from "./ui/mode-toggle";

export const Header = () => {
  return (
    <header className="p-4 flex justify-between border border-bottom-white">
      <h1 className="text-2xl">cAPI - Blazingly Fast API Tester</h1>
      <ModeToggle />
    </header>
  );
};
