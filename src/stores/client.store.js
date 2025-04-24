import { create } from "zustand";
import { fetchClient } from "../api/fetch-client-info.api.1.0.0";

export const useClientStore = create((set, get) => ({
    clientInfos: {},

    getClientInfos: async (slug) => {
        const cache = get().clientInfos[slug];

        if (cache) return cache;

        try {
            const data = await fetchClient(slug);

            set((state) => ({
                clientInfos: {
                    ...state.clientInfos,
                    [slug]: data,
                },
            }));

            return data;
        } catch (error) {
            console.warn(`Erreur lors du fetch du client "${slug}", fallback utilisé.`, error);

            const fallback = { name: "Fiddle", logoUrl: "../static/fiddle.svg" };
            
            set((state) => ({
                clientInfos: {
                    ...state.clientInfos,
                    [slug]: fallback,
                },
            }));
            
            return fallback;
        }
    },
}));