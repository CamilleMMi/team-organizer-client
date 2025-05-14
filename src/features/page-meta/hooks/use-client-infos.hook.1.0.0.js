import { useEffect, useState } from "react";
import { useClientStore } from "../../../stores/client.store.1.0.0";

export function useClientInfos() {
    const [clientInfos, setClientInfos] = useState(null);
    const { getClientInfos } = useClientStore();

    useEffect(() => {
        const hostname = window.location.hostname;
        const slug = (!hostname || hostname === "localhost" || hostname === "127.0.0.1")
            ? "fiddle"
            : hostname.split(".")[0];

        const stored = sessionStorage.getItem(`clientInfos_${slug}`);
        if (stored) {
            setClientInfos(JSON.parse(stored));
            return;
        }

        getClientInfos(slug).then((data) => {
            setClientInfos(data);
            sessionStorage.setItem(`clientInfos_${slug}`, JSON.stringify(data));
        }).catch(console.error);
    }, [getClientInfos]);

    return clientInfos;
}
