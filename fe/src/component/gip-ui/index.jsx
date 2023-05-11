import { Stack, Button, Divider, ListItem, ListItemButton, Tooltip, IconButton, Grid } from "@mui/material";

import ActionConfirm from "./actionConfirm";
import Back from "./backIcon";
import Circle from "./circle";
import Img from "./img";
import Row from "./row";
import Col from "./col";
import Tbox from "./transparantBox";
import Typography, { Title, Subtitle, Caption } from "./typography";
import Logo from "./imgLogo";
import Chip from "./chip";
import SmallBtn from "./smallBtn";
import DTSearch from "./datatables/search";
import DTFilter from "./datatables/filter";
import Modal from "./modal";
import ObjectRender from "./objectRender";
import Avatar from "./avatar";
import Icon from "./icons";

import { search, order } from "./datatables/helper";

import { faker } from "@faker-js/faker";

const UI = {
  Stack,
  Row,
  Col,
  Tbox,
  Text: Typography,
  Caption,
  Subtitle,
  Title,
  Button,
  SmallBtn,
  ActionConfirm,
  Back,
  Circle,
  Divider,
  Img,
  Logo,
  ListItemButton,
  Modal,
  Datatables: {
    DTSearch,
    DTFilter,
    search,
    order,
  },
  Tooltip,
  IconButton,
  ObjectRender,
  Chip,
  Grid,
  Avatar,
  Icon,
};

export default UI;
export { faker };
