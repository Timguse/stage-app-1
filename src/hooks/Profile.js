import { useCallback, useMemo, useState } from "react";
import ProfileService from "../services/ProfileService";

export function useProfile() {
    const [loading, setLoading] = useState(false);
    const [profileData, setProfileData] = useState();
    
    // Admin
    const getProfileData = useCallback((async = false) => {
    
        return ProfileService.getProfileData()
            .then((data) => {
                if (!async) {
                    setProfileData(data);
                    setLoading(true);
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

export default useProfile;
