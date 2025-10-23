import { createContext, ReactNode, useContext, useMemo } from "react";
import { IWizardStaticResources, IQuestionnaire } from "../interfaces/IStaticResources";

export interface IWizardStaticResourcesContext {
    wizardStaticResources: IWizardStaticResources | null;
    questionnaire: IQuestionnaire[];
}

const WizardStaticResourcesContext = createContext({} as IWizardStaticResourcesContext);

export const WizardStaticResourcesProvider = ({
    children,
    questionnaire,
    wizardStaticResources
}: {
    children: ReactNode;
    questionnaire: IQuestionnaire[] | null;
    wizardStaticResources: IWizardStaticResources | null;
}) => (
    <WizardStaticResourcesContext.Provider
        value={useMemo(
            () => ({
                wizardStaticResources,
                questionnaire: questionnaire ?? []
            }),
            [wizardStaticResources, questionnaire]
        )}
    >
        {children}
    </WizardStaticResourcesContext.Provider>
);

const useWizardStaticResources = () => useContext(WizardStaticResourcesContext);

export default useWizardStaticResources;
