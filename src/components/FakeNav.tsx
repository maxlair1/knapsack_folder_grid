import React from "react";
import IconButton from "./IconButton";
import { Icon } from "./icon";

const FakeNav: React.FC = () => (
    <header role="top bar" className="flex items-center justify-between px-4 py-2 bg-neutral-100 shadow-md">
        <IconButton title="Go back" disabled icon={
            <Icon name="ArrowLeft" />
        } aria-label="Go Back" />

        <p>Knapsack <code>FolderGrid</code> Challenge</p>
        
        <IconButton title="More options" icon={
            <Icon name="DotsThreeVertical" />
        } aria-label="More options" />
    </header>
);

export default FakeNav;
