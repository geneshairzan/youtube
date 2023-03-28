import React, { useState, useEffect } from "react";
import UI from "@component/gip-ui";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";

// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function App(props) {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  useEffect(() => {
    // console.log(editorState);
  }, [editorState]);
  return (
    <UI.Stack spacing={1} width={props.fullWidth ? "100%" : "auto"}>
      <UI.Stack direction={"row"} spacing={1}>
        <UI.Text
          variant="Overline"
          color="primary.dark"
          className="f-bold f-capitalize"
        >
          {props.label}
        </UI.Text>
        {props.tip && (
          <UI.Tooltip title={props.tip}>
            <InfoIcon color="primary" />
          </UI.Tooltip>
        )}
      </UI.Stack>
      <UI.Stack
        sx={{
          border: "1px solid #c4c4c4",
          minHeight: "200px",
          "& .rdw-inline-wrapper": {
            display: "flex",
            py: 1,
            px: 1,
            flexDirection: "row",
            borderBottom: "1px solid #c4c4c4",
          },
          "& .rdw-option-wrapper": {
            width: 24,
            height: 24,
            border: "1px solid #c4c4c4",
            mx: 0.5,
            display: "flex",
            borderRadius: "4px",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": {
              bgcolor: "#d1ebff",
            },
          },
          "& .rdw-editor-main": {
            p: 2,
          },
        }}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          toolbar={{
            options: ["inline"],
            inline: { options: ["bold", "italic", "underline"] },
          }}
        />
      </UI.Stack>
    </UI.Stack>
  );
}
