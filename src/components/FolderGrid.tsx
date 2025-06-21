import React, { useState, useRef, useEffect } from "react";
import { FolderData, foldersData }  from "../data";
import { FolderItem } from "./Folder";
import { IconName } from "./icon";
import PopUp from "./PopUp";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';
import { displayModeType } from "../App";

gsap.registerPlugin(useGSAP);

type FolderGridProps = {
    displayMode: displayModeType; // Adjust the type as needed
};

async function getFolderData() {
    // if this would be a real API call, you would fetch and catch errors here
    // For this example, we will just return the static data
    await new Promise(r => setTimeout(r, 2000))
    return foldersData; 
}

export const FolderGrid: React.FC<FolderGridProps> = ({ displayMode }) => {
    const [folderData, setFolderData] = useState<FolderData[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedFolderContent, setSelectedFolderContent] = useState<string[]>([]);
    const folderContainer = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const pullFolderData = async () => {
            const data = await getFolderData()
            setFolderData(data)
        }
        pullFolderData()
    }, [])

    useGSAP(() => {
        gsap.from('.folderItem', {
            duration: 0.25,
            y:15,
            opacity: 0,
            delay: 0.5,
            stagger: 0.05,
            ease: "sine.out", // 0.1 seconds between when each ".box" element starts animating
        });
    },{scope: folderContainer});


    return (
        <>
            <h2 className="sr-only" id="folder-grid-heading">Folder grid</h2>
            <div
                className={`grid gap-2 w-full grid-auto-rows p-2 ${
                    displayMode === "grid"
                        ? "grid-cols-[repeat(auto-fit,minmax(165px,1fr))]"
                        : ""
                }`}
                role="grid list"
                aria-labelledby="folder-grid-heading"
                ref={folderContainer}
            >
                {folderData.map((item) => (
                    <FolderItem
                        className="folderItem"
                        key={item.id}
                        name={item.name}
                        id={item.id}
                        isPrivate={item.isPrivate}
                        updated={item.updated}
                        contents={item.contents}
                        compact={displayMode == "compact"}
                        aria-label={undefined}
                        icon={item.icon as IconName}
                        onClick={() => {
                            setSelectedFolderContent(item.contents);
                            setIsOpen(true)
                        }}
                    />
                ))}
            </div>
            <PopUp
                isOpen={isOpen}
                onClose={function (): void {
                    setIsOpen(false);
                }}
            >
                {selectedFolderContent.length >= 1
                    ? selectedFolderContent.map(element => (
                        <div key={element} className="p-2">
                            <p>{element}</p>
                        </div>
                    ))
                    : "No items available"
                }
            </PopUp>
        </>
    );
};