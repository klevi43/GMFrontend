import axiosInstance from "./axiosInstance"

class CsrfService {
    getCsrfToken = () => {    
            axiosInstance.get("/csrf-cookie").then(() => {
                setTimeout(() => console.log(document.cookie), 1000)});
            
    }
}
const csrfService = new CsrfService();
export default csrfService;