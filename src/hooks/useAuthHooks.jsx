import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";

const useAuthHooks = () => {
    return useContext(AuthContext)
};

export default useAuthHooks;