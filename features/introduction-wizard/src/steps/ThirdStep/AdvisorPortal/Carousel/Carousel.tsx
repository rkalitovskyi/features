import { Paper } from "@mui/material";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { RiskTradeOffCard } from "@frontend/ui";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./carousel.module.scss";

import { offerings } from "../staticData";

const Carousel = () => (
    <div>
        <ResponsiveCarousel
            className={styles.carousel}
            renderArrowNext={(onClickHandler, hasNext) =>
                hasNext && (
                    <Paper
                        className={styles["arrrow-right"]}
                        elevation={1}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        role="button"
                        tabIndex={0}
                    >
                        <ArrowForwardIcon />
                    </Paper>
                )
            }
            renderArrowPrev={(onClickHandler, hasPrev) =>
                hasPrev && (
                    <Paper
                        className={styles["arrrow-left"]}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        role="button"
                        tabIndex={0}
                    >
                        <ArrowBackIcon />
                    </Paper>
                )
            }
            showStatus={false}
        >
            {offerings.map(([offering1, offering2]) => (
                <div className={styles["slider-container"]} key={offering1.title}>
                    <RiskTradeOffCard {...offering1} />
                    <RiskTradeOffCard {...offering2} />
                </div>
            ))}
        </ResponsiveCarousel>
    </div>
);

export default Carousel;
