import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { PATH } from "./router"

type Props = {
   children: ReactNode
}
export const ProtectedRoute = ({children}: Props) => {
    const logged = false
    return logged ? children : <Navigate to={PATH.LOGIN}/>
}