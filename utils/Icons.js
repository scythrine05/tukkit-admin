import { RxDashboard, RxFile, RxChatBubble, RxPinLeft } from "react-icons/rx";
import {
  MdOutlineArrowForwardIos,
  MdErrorOutline,
  MdDelete,
  MdEdit,
  MdOutlineCheckCircleOutline,
  MdOutlineAdd,
  MdClear,
} from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";

export const DASHBOARD = () => <RxDashboard />;
export const POST = () => <RxFile />;
export const FEEDBACK = () => <RxChatBubble />;
export const EXIT = () => <RxPinLeft />;
export const ERROR = () => <MdErrorOutline />;
export const CHECK = () => <MdOutlineCheckCircleOutline />;
export const ARROW_FORWARD = () => <MdOutlineArrowForwardIos />;
export const TRASH = () => <MdDelete color="red" size="18" />;
export const EDIT = () => <MdEdit size="18" />;
export const STAR = () => <BsFillStarFill size="18" color="#ffdf00" />;
export const ADD = () => <MdOutlineAdd size="18" />;
export const CROSS = () => <MdClear size="18" />;
export const POSTADD = () => <BiBookAdd size="18" />;
