import AuthorizedService from "./base/AuthorizedService";

const baseURL = "http://localhost:9999/";

class ProfileService extends AuthorizedService {
    getProfile() {
        return this.http
            .get(`${baseURL}/profile/tim`)
            .then((response) => response.data);
    }
}
export default new ProfileService();
