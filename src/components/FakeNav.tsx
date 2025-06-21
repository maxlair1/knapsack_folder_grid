import React from "react";
import IconButton from "./IconButton";
import { Icon } from "./icon";
import { displayModeType } from "../App";

interface FakeNavProps {
    displayMode: displayModeType;
    setDisplayMode: (displayMode: displayModeType) => void
}

const FakeNav: React.FC<FakeNavProps> = ({displayMode, setDisplayMode}) => (
    <header role="top bar" className="flex items-center justify-between sm:px-4 py-2 bg-neutral-100 shadow-md">
        <IconButton title="Go back" disabled icon={
            <Icon name="ArrowLeft" />
        } aria-label="Go Back" />

        <p className="truncate">Knapsack <code>FolderGrid</code> Challenge</p>
        <div className="flex items-center">
            {/* Toggle buttons for Compact and Grid mode */}
            <div className="flex gap-1">
            </div>
            <IconButton
                title="Compact mode"
                icon={<Icon name="Rows" />}
                aria-label="Compact mode"
                selected={displayMode === "compact"}
                onClick={() => setDisplayMode("compact")}
            />
            <IconButton
                title="Grid mode"
                icon={<Icon name="SquaresFour" />}
                aria-label="Grid mode"
                selected={displayMode == "grid"} // You will need to manage this state
                onClick={() => setDisplayMode("grid")}
            />
        </div>
        {/*         
        <IconButton title="More options" icon={
            <Icon name="DotsThreeVertical" />
        } aria-label="More options" /> */}
    </header>
);

export default FakeNav;
