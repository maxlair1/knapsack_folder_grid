import React, { useState } from "react";
import theme from "../theme";
import { Icon, IconName } from "./icon";
import { ReactSVG } from "react-svg";
import IconButton from "./IconButton";


export interface FolderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    id: string;
    name: string;
    compact?: boolean;
    isPrivate?: boolean;
    //When it was last updated
    updated: string;
    contents: string[];
    icon?: IconName;
    color?: string;
}

export const FolderItem = ({
    name,
    id,
    isPrivate = false,
    updated,
    contents,
    compact = false,
    icon = "Folder",
    color = theme.colors.primary[500],
    ...VanillaProps
}: FolderProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        console.log("Hovered over folder:", name);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        // Make the entire selection a button for additional accessibility such as keyboard navigation and screen readers
        <button {...VanillaProps} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered && 
                <IconButton onClick={() => {console.log("More options selected!")}} title="More options" className="absolute top-[0] right-[0] z-overlay" icon={<Icon name="DotsThree" />} aria-label="More options" />
            }
            <div className="contentWrapper | flex flex-col pt-4 pb-3 px-4 gap-3 rounded-md items-center transition-bouncy transition-[transform] hover:bg-neutral-100 active:scale-[0.98]">
                {/* Wrapper for the folder visual ↴ (Controls the responsive size of the SVG)*/}
                <div className="folderGraphic | w-full max-w-[200px] font-sm relative flex items-center justify-center">
                    {/* <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 151 103"
                        fill={color}
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ display: "block" }}
                    >
                        <path  d="M143 11C147.418 11 151 14.5817 151 19V95C151 99.4183 147.418 103 143 103H8C3.58172 103 8.05346e-08 99.4183 0 95V7.7666C0.000209933 3.47732 3.47732 0.000210073 7.7666 0H47.0498C48.8739 6.77101e-05 50.6399 0.641941 52.0381 1.81348L61.8852 10.0658C62.6053 10.6693 63.5149 11 64.4545 11H143Z" fill={color} />
                    </svg> */}
                    <img src="/folder.svg" alt="folder" />
                    <span className="absolute">
                        <Icon name={icon} size={32} color={theme.colors.neutral[50]} />
                    </span>
                </div>
                {/* Text Content ↴ */}
                <div className="flex flex-col gap-1">
                    {/* Project Title ↴ */}
                    <span className="inline-flex gap-1 items-center color-text-primary truncate">
                        {isPrivate && <Icon name="Lock" size={16} weight="bold" color={theme.colors.text.secondary}></Icon>}
                        <p className="text-lg font-medium">{name}</p>
                    </span>
                    {/* # of Items ↴ */}
                    <span>
                        <p className="text-sm leading-snug text-text-secondary">{contents.length} items</p>
                    </span>
                </div>
                <div className="folderItemFooter | flex justify-center w-full">
                    <p className="text-xs text-text-muted">{updated}</p>
                </div>
            </div>

        </button>
    );
}