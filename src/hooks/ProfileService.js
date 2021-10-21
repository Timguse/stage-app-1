import { useCallback, useMemo, useState } from "react";
import ProfileService from "../services/ProfileService";

export function useProfile() {
    const [isUpdating, setIsUpdating] = useState(false);
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState();

    // Admin
    const getProfileData = useCallback((async = false) => {
        setIsUpdating(true);
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
            isUpdating,
            loading,
            // data variables
            profileData,
            // methods
            getProfileData,
        };
    }, [
        // state variables
        isUpdating,
        loading,
        // data variables
        profileData,
        // methods
        getProfileData,
    ]);
}
export default { useProfile };