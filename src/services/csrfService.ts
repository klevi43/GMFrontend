import axiosInstance from "./axiosInstance";

class CsrfService {
  getCsrfToken = () => {
    axiosInstance.get("/csrf-cookie");
  };
}
const csrfService = new CsrfService();
export default csrfService;
