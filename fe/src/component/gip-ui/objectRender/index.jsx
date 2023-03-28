import UI from "@component/gip-ui";

export default function App({ data }) {
  return (
    <UI.Stack bgcolor={"grey.c"} p={1} m={0}>
      <pre
        style={{
          margin: 0,
        }}
      >
        {JSON.stringify(data, null, 4)}
        {/* {JSON.stringify(data, null, 2).replace(/\}|\{/g, "")} */}
      </pre>
    </UI.Stack>
  );
}
