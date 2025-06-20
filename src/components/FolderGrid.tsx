import React, { useState, useRef } from "react";
import { foldersData }  from "../data";
import { FolderItem } from "./Folder";
import { IconName } from "./icon";
import PopUp from "./PopUp";
import { forEachChild } from "typescript/lib/tsserverlibrary";
import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export const FolderGrid: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedFolderContent, setSelectedFolderContent] = useState<string[]>([]);

    const folderContainer = useRef();
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
    
    function getFolderData() {
        // if this would be a real API call, you would fetch and catch errors here
        // For this example, we will just return the static data
        return foldersData;
    }

    return (
        <>
            <h2 className="sr-only" id="folder-grid-heading">Folder grid</h2>
            <div
                className="grid gap-2 w-full grid-auto-rows p-2 xs:grid-cols-[repeat(auto-fit,minmax(185px,1fr))]"
                role="grid list"
                aria-labelledby="folder-grid-heading"
                ref={folderContainer}
            >
                {getFolderData().map((item) => (
                <FolderItem
                    className="folderItem"
                    key={item.id}
                    name={item.name}
                    id={item.id}
                    isPrivate={item.isPrivate}
                    updated={item.updated}
                    contents={item.contents}
                    aria-label={undefined}
                    icon={item.icon as IconName}
                    onClick={() => {
                        setIsOpen(true);
                        setSelectedFolderContent(item.contents);
                    }}
                />
                ))}
            </div>
            <PopUp isOpen={isOpen} onClose={function (): void {
                setIsOpen(false);
            }} children={
                selectedFolderContent.map(element => {
                    return (
                        <div key={element} className="p-2 border-b border-neutral-200">
                            <p>{element}</p>
                        </div>
                    );
                })}
            />
        </>
    );
};