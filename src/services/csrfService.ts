import axiosInstance from "./axiosInstance"

class CsrfService {
    getCsrfToken = () => {    
            axiosInstance.get("/csrf-cookie").then(() => console.log(document.cookie));

    }
}
const csrfService = new CsrfService();
export default csrfService;