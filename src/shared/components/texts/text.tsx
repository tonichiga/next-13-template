import s from "./bullet.module.scss";
import { IText } from "@/types/text.types";
import { classes } from "@/shared/lib";

const Text = ({ text, type, className = "" }: IText) => {
  return <p className={classes(s[`type-${type}`], className)}>{text}</p>;
};

export default Text;
