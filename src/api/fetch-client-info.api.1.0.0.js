import apiClient from "../lib/api-client.library.1.0.0";

export async function fetchClient(clientSlug) {
    try {
        const { data } = await apiClient.get(`/clients/${clientSlug}`);

        return data;
    } catch (error) {
        console.error("Erreur durant la récupération des informations du client: ", error);

        throw error;
    }
}