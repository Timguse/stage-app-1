import AuthorizedService from "./base/AuthorizedService";
import env from "react-dotenv";

const baseURL = env.baseURL;

class ProfileService extends AuthorizedService {
    getProfile() {
        return this.http
            .get(`${baseURL}/profile.tim`)
            .then((response) => response.data);
    }
}
export default new ProfileService();
