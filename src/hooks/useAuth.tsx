import { useSelector } from "react-redux";
import { isAuthenticatedSelector, userSelector } from "../app/slices/authSlice";

export default function useAuth() {
    const user = useSelector(userSelector);
    const isAuthenticated = useSelector(isAuthenticatedSelector);

    return { user, isAuthenticated }
}