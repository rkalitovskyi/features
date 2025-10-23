import { useContext } from "react";
import TutorialContext, { ITutorialContext } from "./tutorialContext";

const useTutorial = () => useContext<ITutorialContext>(TutorialContext);

export default useTutorial;
