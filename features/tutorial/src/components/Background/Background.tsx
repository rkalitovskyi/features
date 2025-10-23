import { MAX_Z_INDEX } from "../../const/const";

import styles from "./background.module.scss";

const Background = () => <div className={styles.background} style={{ zIndex: MAX_Z_INDEX }} />;

export default Background;
