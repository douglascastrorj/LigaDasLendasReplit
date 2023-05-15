import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home'
import Summoner from "./pages/Summoner/Summoner";
const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "team",
    //     element: <Team />,
    //     loader: teamLoader,
    //   },
    // ],
  },
  {
    path: '/summoner',
    element: <Summoner />
  }
]);


export const Router = (props: any) => <RouterProvider {...props} router={router} />