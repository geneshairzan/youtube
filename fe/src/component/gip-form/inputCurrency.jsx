//https://s-yadav.github.io/react-number-format/docs/intro/

import React from "react";
import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import { TextField, Typography } from "@mui/material";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      // isNumericString
      prefix="IDR "
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function FormattedInputs(props) {
  return (
    <>
      <Typography
        variant="Overline"
        color="primary.dark"
        className="f-bold"
        mb={1}
      >
        {props.label}
      </Typography>
      <TextField
        variant="outlined"
        {...props}
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        label=""
      />
    </>
  );
}
