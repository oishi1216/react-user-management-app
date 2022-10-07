import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router: FC = memo(() => {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            {homeRoutes.map((router) => (
                <Route key={router.path} element={<HeaderLayout />}>
                    <Route key={router.path} path={router.path} element={router.children} />
                </Route>
            ))}
            <Route path="*" element={<Page404 />} />
        </Routes>
    )
})