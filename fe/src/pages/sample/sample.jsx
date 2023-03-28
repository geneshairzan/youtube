import { useContext } from "react";
import Context from "@/serviceProvider/context";

// main  component
export default function Form() {
  return (
    <div>
      sample page
      <Panel />
      <Button>Sign up</Button>
    </div>
  );
}

// context sample child component 1 -  using context

function Panel() {
  const { theme } = useContext(Context);
  // to display theme context value
  return <div>{theme}</div>;
}

// // context sample child component 2 -  using context

function Button() {
  const { theme, settheme } = useContext(Context);

  // to change/mod theme context value
  function handleTheme() {
    settheme(theme == "dark" ? "light" : "dark");
  }

  return <button onClick={handleTheme}>{`use ${theme}`}</button>;
}
