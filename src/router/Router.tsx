import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
    return(
        <Routes>
            <Route path="/Login" element={<Login />} />
            {homeRoutes.map((router) => (
                <Route key={router.path} path={router.path} element={router.children} ></Route>
            ))}
        </Routes>
    )
})