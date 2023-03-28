import React, { useState } from "react";
import UI from "@component/gip-ui";

const fileTypes = ["JPG", "PNG", "GIF"];

// drag drop file component
export default function DragDropFile(props) {
  function handleFile(files) {
    props.value(files);
  }

  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <UI.Stack
      component={"form"}
      sx={{
        height: "400px",
        position: "relative",
      }}
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        multiple={true}
        onChange={handleChange}
        style={{
          display: "none",
        }}
      />
      <UI.Stack
        sx={{
          height: "100%",
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
          "border-width": "2px",
          "border-radius": "1rem",
          "border-style": "dashed",
          "border-color": "#cbd5e1",
          "background-color": "#f8fafc",
        }}
        // htmlFor="input-file-upload"
        className={dragActive ? "drag-active" : ""}
      >
        <UI.Stack>
          <p>Drag and drop your file here or</p>
          <UI.Button onClick={onButtonClick}>Upload a file</UI.Button>
        </UI.Stack>
      </UI.Stack>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </UI.Stack>
  );
}
