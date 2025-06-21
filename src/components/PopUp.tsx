import React, { useRef } from "react";
import ReactDOM from "react-dom";
import IconButton from "./IconButton";
import { Icon } from "./icon";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP)

interface PopUpProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, children }) => {
    const popupSurface = useRef<HTMLDivElement>(null);

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            className="fixed z-overlay flex items-center justify-center inset-[0]"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={onClose}
        >
            <div
                ref={popupSurface}
                className="popupSurface | bg-surface-foreground rounded-lg shadow-lg p-4 max-w-lg w-full justify-center"
                onClick={e => e.stopPropagation()}
            >
                <header className="flex flex-row justify-between w-[100%] items-center mb-4">
                    <h6>Inner Content Includes:</h6>
                    <IconButton onClick={onClose} icon={<Icon name="X" />} aria-label="Close" title="Close Pop-up"/>
                </header>
                {children}
            </div>
        </div>,
        document.body
    );
};

export default PopUp;