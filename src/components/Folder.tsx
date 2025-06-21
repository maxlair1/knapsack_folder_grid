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

    return (
        // Make the entire selection a button for additional accessibility such as keyboard navigation and screen readers
        <button {...VanillaProps}>
            <div className={`contentWrapper | flex rounded-md items-center transition-bouncy transition-[transform] hover:bg-neutral-100 active:scale-[0.98] ${compact ? "flex px-4 py-2 gap-3" : "flex-col gap-3 pt-4 pb-3 px-4"}`}>
                {/* Wrapper for the folder visual ↴ (Controls the responsive size of the SVG)*/}
                <div className={`folderGraphic | ${compact ? "inline-block" : "max-w-[250px]"} font-sm relative flex items-center justify-center justify-start`}>
                    <img src={compact ? "folder_compact.svg" : "/folder.svg"} alt="folder" />
                    <span className={`absolute ${compact && "translate-y-[-4px]"}`}>
                        <Icon name={icon} size={32} color={theme.colors.neutral[50]} />
                    </span>
                </div>
                {/* Text Content ↴ */}
                <div className={`flex flex-col gap-1 ${compact ? "text-left justify-start" : "justify-center"}`}>
                    {/* Project Title ↴ */}
                    <span className={`inline-flex gap-1 items-center color-text-primary ${compact ? "text-ellipsis" : "truncate"}`}>
                        {isPrivate && <Icon name="Lock" size={16} weight="bold" color={theme.colors.text.secondary}></Icon>}
                        <p className="text-lg font-medium">{name}</p>
                    </span>
                    {/* # of Items ↴ */}
                    <span>
                        <p className="text-sm leading-snug text-text-secondary">{contents.length} items</p>
                    </span>
                    <p className="text-xs text-text-muted">{updated}</p>
                </div>
            </div>

        </button>
    );
}