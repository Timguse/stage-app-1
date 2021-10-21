import { useCallback, useMemo, useState } from "react";
import ProfileService from "../services/ProfileService";

export function useProfile() {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState();

    // Admin
    const getProfileData = useCallback((async = false) => {
        if (!async) {
            setLoading(true);
        }
        return ProfileService.getProfileData()
            .then((data) => {
                if (!async) {
                    setLoading(false);
                    setProfileData(data);
                }
                return data;
            })
            .catch((error) => {
                if (!async) {
                    setLoading(false);
                }
                return error.response;
            });
    });

    return useMemo(() => {
        return {
            // state variables
            loading,
            // data variables
            profileData,
            // methods
            getProfileData,
        };
    }, [
        // state variables
        loading,
        // data variables
        profileData,
        // methods
        getProfileData,
    ]);
}
