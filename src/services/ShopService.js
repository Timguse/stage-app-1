import AuthorizedService from "./base/AuthorizedService";

const baseURL = "http://localhost:9999";

class ShopService extends AuthorizedService {
    getShopData() {
        return this.http
            .get(`${baseURL}/product/shop`)
            .then((response) => response.data);
    }
}
export default new ShopService();
