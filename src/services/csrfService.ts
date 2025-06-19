import axiosInstance from "./axiosInstance"

class CsrfService {
    getCsrfToken = async () => {
        try {
            await axiosInstance.get("/csrf-cookie");
            console.log(document.cookie);
        } catch (error) {
            console.log(error);
        }
    }
}
const csrfService = new CsrfService();
export default csrfService;