import toast from "react-hot-toast";

export const notify = (message: any) => toast(message);

export const successMessage = (message: any) => toast.success(message);

export const errorMessage = (message: any) => toast.error(message);