import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout, Sponsors } from "./components";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />} >
			<Route path="" element={<App />} />
			<Route path="sponsors" element={<Sponsors />} />
		</Route>,
	)
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
