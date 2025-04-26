import { useLocation, useMatch } from "react-router-dom";
import { useClientInfos } from "../hooks/use-client-infos.hook.1.0.0";
import { useDynamicTitle } from "../hooks/use-dynamic-title.hook.1.0.0";
import { useFavicon } from "../hooks/use-favicon.hook.1.0.0";

function PageMetaUpdater() {
    const location = useLocation();
    const matchMessageDetail = useMatch("/messages/:id");
    const id = matchMessageDetail?.params?.id;

    const clientInfos = useClientInfos();

    useDynamicTitle(clientInfos, location.pathname, id);
    useFavicon(clientInfos?.logoUrl);

    return null;
}

export default PageMetaUpdater;