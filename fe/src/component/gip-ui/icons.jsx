import order from "@img/icon/order.svg";
import SvgIcon from "@mui/material/SvgIcon";
// import { ReactComponent as MyIcon } from "@mui/material/SvgIcon";

function IconRender(props) {
  return (
    <img src={props.path} style={{ width: 18, height: 18, ...props.sx }} />
  );
}

const Icons = {
  orderIcon: (props) => <IconRender path={order} {...props} />,
};

export { Icons };
