import { StaticImageData } from "next/image";
import { RTEnum } from "@frontend/enums";

export const offerings = [
    [
        {
            title: "Offering 1",
            subtitle: "subtitle",
            upside: 5000,
            downside: 4000,
            imageUrl: offering1Img as unknown as StaticImageData,
            ribbonType: RTEnum.Conservative
        },
        {
            title: "Offering 2",
            subtitle: "subtitle",
            upside: 15000,
            downside: 12000,
            imageUrl: offering2Img as unknown as StaticImageData,
            ribbonType: RTEnum.ModeratelyConservative
        }
    ],
    [
        {
            title: "Offering 3",
            subtitle: "subtitle",
            upside: 25000,
            downside: 30000,
            imageUrl: offering3Img as unknown as StaticImageData,
            ribbonType: RTEnum.ModeratelyAggressive
        },
        {
            title: "Offering 4",
            subtitle: "subtitle",
            upside: 40000,
            downside: 55000,
            imageUrl: offering4Img as unknown as StaticImageData,
            ribbonType: RTEnum.Aggressive
        }
    ]
];
