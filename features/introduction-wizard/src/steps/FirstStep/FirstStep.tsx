import dynamic from "next/dynamic";
import classNames from "classnames";
import { Typography } from "@mui/material";
import { MediaTypesEnum } from "@frontend/ui";
import StepHeader from "../../components/StepHeader/StepHeader";
import useWizardStaticResources from "../../context/useWizardStaticResources";

const Media = dynamic(() => import("@frontend/ui").then((module) => module.Media), { ssr: false });

import styles from "./firstStep.module.scss";

type FifthStepProps = { isAdvisorPortal?: boolean };

const FirstStep = ({ isAdvisorPortal }: FifthStepProps) => {
    const { wizardStaticResources } = useWizardStaticResources();
    const title = isAdvisorPortal
        ? "Lorem ipsum dolor sit amet."
        : "Lorem ipsum dolor sit amet.";

    const { finalDisclaimImagePreview, finalDisclaimVideo } = wizardStaticResources || {
        finalDisclaimImagePreview: "",
        finalDisclaimVideo: ""
    };

    return (
        <div className={styles.container}>
            <StepHeader
                subtitle="This 2 minute video gives you an overview of who we are and why we’re different."
                title={title}
            />
            <div className={styles["video-container"]}>
                <Media
                    altText="Overview video"
                    light={finalDisclaimImagePreview}
                    type={MediaTypesEnum.Video}
                    url={finalDisclaimVideo}
                    playing
                />
            </div>
            <Typography className={classNames("desktop-14", styles["video-description"])}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur debitis deleniti dolore doloremque error explicabo fugit illum ipsa labore magnam maiores nesciunt nobis officia quasi, reprehenderit, rerum veniam. Consequuntur.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias architecto, commodi consequuntur culpa cumque enim error explicabo fuga in, laudantium molestiae nihil nobis possimus praesentium qui sapiente sed sit voluptates?
            </Typography>
            <Typography className={classNames("desktop-14", styles["video-description"])}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aspernatur at autem consequuntur culpa debitis dolor dolore ea eligendi, eveniet facere laudantium neque quae quaerat sapiente sed sint tempore, temporibus.
            </Typography>
        </div>
    );
};

export default FirstStep;
