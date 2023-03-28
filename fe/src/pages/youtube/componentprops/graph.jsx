import UI from "@component/gip-ui";

const defLabel = [
  { name: "bad", w: 0.25 },
  { name: "not good", w: 0.25 },
  { name: "avg", w: 0.25 },
  { name: "good", w: 0.25 },
  { name: "best", w: 0.25 },
];

export default function App({ score = 10, w = 460, label = defLabel, bgcolor }) {
  return (
    <UI.Stack position={"relative"} pt={3}>
      <UI.Stack
        sx={{
          width: w,
          borderBottom: "2px solid #c8c8c8",
        }}
      >
        <UI.Stack
          sx={{
            position: "absolute",
            height: 20,
            top: 15,
            width: (score / 100) * w,
            bgcolor: bgcolor || "secondary.main",
            zIndex: 99,
          }}
        />
      </UI.Stack>
      <UI.Row
        justifyContent="space-between"
        sx={{
          width: w + 8,
          top: "-5px",
          position: "relative",
        }}
      >
        {[...Array(11)].map((d, ix) => (
          <UI.Col
            key={ix}
            sx={{
              position: "relative",
              left: -4,
              minWidth: 8,
            }}
          >
            {ix > 0 && <UI.Circle w={8} />}
          </UI.Col>
        ))}
      </UI.Row>

      <UI.Row width={w} pt={2}>
        {label.map((d) => (
          <Legend label={d.name} w={d.w * w} first />
        ))}
      </UI.Row>
    </UI.Stack>
  );
}

function Legend({ label, w, first }) {
  return (
    <UI.Stack
      sx={{
        width: w,
        height: 12,
        borderLeft: first && "1px solid black",
        borderRight: "1px solid black",
        borderBottom: "1px solid black",
      }}
    >
      <UI.Text
        variant="caption"
        align="center"
        sx={{
          position: "relative",
          top: "16px",
        }}
      >
        {label}
      </UI.Text>
    </UI.Stack>
  );
}
