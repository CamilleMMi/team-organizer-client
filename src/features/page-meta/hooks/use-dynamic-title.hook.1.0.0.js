import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export function useDynamicTitle(clientInfos, pathname, id) {
    const { t } = useTranslation();

    useEffect(() => {
        if (!clientInfos) return;

        const pageKey = pathname === "/" ? "home" : pathname.split("/")[1];
        const { title, showId } = t(`titleTranslation.${pageKey}`, { returnObjects: true });
        const titleWithId = showId && id ? `${title} #${id}` : title;

        document.title = `${clientInfos.name} - ${titleWithId}`;
    }, [clientInfos, pathname, id, t]);
}