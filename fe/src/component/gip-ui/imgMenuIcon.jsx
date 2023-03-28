import { Stack, Tooltip, Typography } from "@mui/material";

export default function App({
  imgpath = "broadcast",
  open = false,
  selected = false,
}) {
  function getImgPath() {
    return selected
      ? `${import.meta.env.BASE_URL}assets/img/menu/${imgpath} active.svg`
      : `${import.meta.env.BASE_URL}assets/img/menu/${imgpath} inactive.svg`;
  }

  return (
    <Tooltip
      title={open ? "" : <Typography variant="overline">{imgpath}</Typography>}
      placement="right"
      sx={{
        tooltip: {
          fontSize: 24,
        },
      }}
    >
      <Stack width={32} flexShrink={0}>
        <img
          src={getImgPath()}
          onMouseOver={(e) =>
            (e.currentTarget.src = `${
              import.meta.env.BASE_URL
            }assets/img/menu/${imgpath} active.svg`)
          }
          onMouseOut={(e) => (e.currentTarget.src = getImgPath())}
        />
      </Stack>
    </Tooltip>
  );
}
