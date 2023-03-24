import { toast } from "react-toastify";
import { toastifyconfig } from "src/config/toastify.config";

export const toastifyService = {
  success: (message) => {
    toast.success(message, toastifyconfig);
  },
  warning: (message) => {
    toast.warning(message, toastifyconfig);
  },
  error: (message) => {
    toast.error(message, toastifyconfig);
  },
};
