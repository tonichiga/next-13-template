import s from "./bullet.module.scss";
import { ITitle } from "@/types/title.types";
import { classes } from "@/shared/utils";

const Title = ({ text, type, className = "" }: ITitle) => {
  return <p className={classes(s[`type-${type}`], className)}>{text}</p>;
};

export default Title;
