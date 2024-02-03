import toast from "react-hot-toast";
import api from "./instance";

export const Signup = async (form: any, setLoading: any) => {
  api
    .post("/sign-up", form)
    .then((res) => {
      toast.success(res.data.message);
      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      toast.error(err.response.data.message);
    });
};
