import { useEffect } from "react";

export function useFavicon(logoUrl) {
    useEffect(() => {
        if (!logoUrl) return;

        let link = document.querySelector("link[rel*='icon']");

        if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
        }

        if (link.href !== logoUrl) {
            link.href = logoUrl;
        }
    }, [logoUrl]);
}