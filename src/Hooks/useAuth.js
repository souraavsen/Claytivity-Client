import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider";

// using authcontext api
const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth;