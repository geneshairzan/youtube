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
    </div>
  );
}

function Test(params) {
  return <>404. Not Found</>;
}
