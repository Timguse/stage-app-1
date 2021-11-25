import { useCallback, useMemo, useState } from "react";
import ShopService from "../services/ShopService";

export function useShop() {
    const [loading, setLoading] = useState(false);
    const [ShopData, setShopData] = useState();
    
    // Admin
    const getShopData = useCallback((async = false) => {
    
        return ShopService.getShopData()
            .then((data) => {
                if (!async) {
                    setShopData(data);
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
            ShopData,
            // methods
            getShopData,
        };
    }, [
        // state variables
        loading, 
        // data variables
        ShopData,
        // methods
        getShopData,
    ]);
}

export default useShop;
