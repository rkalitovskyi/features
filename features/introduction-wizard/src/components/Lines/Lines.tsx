import styles from "./lines.module.scss";

type LinesProps = {
    bottom?: number;
    count: number;
    left?: number;
    top?: number;
};

const Lines = ({ bottom, count, left, top }: LinesProps) => {
    const lines = new Array(count).fill(null);

    return (
        <div className={styles.lines} style={{ bottom, left, top }}>
            {lines.map((_, index) => (
                <div className={styles.line} key={index} />
            ))}
        </div>
    );
};

export default Lines;
