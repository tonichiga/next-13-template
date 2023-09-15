import s from "./bullet.module.scss";
import { IBullet } from "@/types/bullet.types";
import { classes } from "@/shared/utils";

const Bullet = ({ text, type, className = "" }: IBullet) => {
  return <p className={classes(s[`type-${type}`], className)}>{text}</p>;
};

export default Bullet;
