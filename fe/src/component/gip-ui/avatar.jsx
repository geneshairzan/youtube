import UI from "@component/gip-ui";

export default function App({ src, ...props }) {
  return (
    <UI.Stack borderRadius={"50%"} overflow="hidden" height={props.w || 128} width={props.w || 128} rad>
      <UI.Img
        src={src}
        publicPath
        sx={{
          objectFit: "contain",
        }}
      />
    </UI.Stack>
  );
}
