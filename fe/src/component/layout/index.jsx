import UI from "@component/gip-ui";
import Header from "./_header";
import Footer from "./_footer";

export default function App(props) {
  return (
    <UI.Stack
      sx={{
        pt: 7,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <UI.Stack
        style={{
          display: "flex",
          flexGrow: 1,
        }}
      >
        {props.children}
      </UI.Stack>
      <Footer />
    </UI.Stack>
  );
}
