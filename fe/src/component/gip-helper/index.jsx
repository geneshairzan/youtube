import { fcurr, fdate } from "./formating";
import _ from "lodash";

const helper = {
  curr: fcurr,
  date: fdate,
  data: {
    ommit: _.omit,
  },

  getExt,
  getFileName,
  getFileIcon,
};

export default helper;

function getFileIcon(word) {
  if (word.includes(".pdf")) return "icon pdf.svg";
  if (word.includes(".txt")) return "icon txt.svg";
  if (word.includes(".ppt")) return "icon ppt.svg";
  if (word.includes(".xls") || word.includes(".csv")) return "icon xls.svg";
  if (word.includes(".doc")) return "icon xls.svg";
  return "icon image.svg";
}

function getExt(word) {
  return word.substr(word.lastIndexOf("."));
}

function getFileName(word) {
  return word.substr(0, word.lastIndexOf("."));
}
