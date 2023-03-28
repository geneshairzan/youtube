export default function App(props) {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Test />
      <Test2 />
      <Test />
      <Test />
      <Test />
    </div>
  );
}

function Test(params) {
  return <>something</>;
}

function Tes2(tparams) {
  return <>something</>;
}
