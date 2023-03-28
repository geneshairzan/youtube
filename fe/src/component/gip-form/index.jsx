import ImgCrop from "./gip-imagecrop";
import Input from "./inputText";
import Select from "./inputSelect";
import Date from "./inputDate";
import File from "./inputFile";
import Radio from "./inputRadio";
import Checkbox from "./inputCheckbox";
import Currency from "./inputCurrency";
import Finder from "./inputFinder";
import Btn from "./inputButton";
import Tags from "./inputTags";
import DropFile from "./inputDropFile";
import Editor from "./inputEditorDraftjs";
import { fetcher, fetcherMultipart, fetcherf } from "./fetcher";
import { useFormik } from "formik";
import * as yup from "yup";

const Form = {
  Input,
  ImgCrop,
  Date,
  File,
  Radio,
  Currency,
  Finder,
  Checkbox,
  Btn,
  Tags,
  Select,
  DropFile,
  Editor,
};

export default Form;
export { fetcher, fetcherf, fetcherMultipart, useFormik, yup };
