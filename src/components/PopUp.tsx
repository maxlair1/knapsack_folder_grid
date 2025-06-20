import React from "react";
import IconButton from "./IconButton";
import { Icon } from "./icon";

interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed w-[100vw] h-[100vh] z-overlay flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={onClose}
        >
            <div
                className="bg-surface-foreground rounded-lg shadow-lg p-6 max-w-lg w-full"
                onClick={e => e.stopPropagation()}
            >
                <IconButton onClick={onClose} icon={<Icon name="X" />} aria-label="Close" title="Close Pop-up"/>
                <h6 className="mb-4">Inner Content Includes:</h6>
                {children}
            </div>
        </div>
    );
};

export default PopUp;