import { useEffect } from "react";
import { useLocation, useMatch } from "react-router-dom";
import { useTranslation } from "react-i18next";

function TitleUpdater() {
    const location = useLocation();
    const { t } = useTranslation();

    const matchMessageDetail = useMatch("/messages/:id");
    const id = matchMessageDetail?.params?.id;

    const getClientName = () => {
        const hostname = window.location.hostname;

        if (hostname === undefined || hostname === "localhost" || hostname === "127.0.0.1")
            return "Fiddle";

        return hostname.split(".")[0];
    }

    const getPageKey = (pathname) => {
        if (pathname === '/')
            return "home";
        else
            return pathname.split('/')[1];
    }

    useEffect(() => {
        const clientName = getClientName();
        const pageKey = getPageKey(location.pathname);
        const { title, showId } = t(`titleTranslation.${pageKey}`, { returnObjects: true });

        const titleWithId = showId && id ? `${title} #${id}` : title;

        document.title = `${clientName} - ${titleWithId}`;
    }, [location.pathname, t, id]);

    return null;
}

export default TitleUpdater;