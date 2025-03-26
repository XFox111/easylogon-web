import { lazy, ReactElement } from "react";
import { useTheme } from "./utils/useTheme";
import { FluentProvider } from "@fluentui/react-components";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import StartPage from "./pages/StartPage";
import SuccessPage from "./pages/SuccessPage";
import ErrorPage from "./pages/ErrorPage";

const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));

export default function App(): ReactElement
{
	const theme = useTheme();

	return (
		<FluentProvider theme={ theme }>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={ <StartPage /> } />
					<Route path="/success" element={ <SuccessPage /> } />
					<Route path="/error" element={ <ErrorPage /> } />
					<Route path="/privacy" element={ <PrivacyPage /> } />
					<Route path="*" element={ <Navigate to="/" /> } />
				</Routes>
			</BrowserRouter>

			<Helmet>
				<meta name="theme-color" content={ theme.colorNeutralBackground1 } />
			</Helmet>
		</FluentProvider>
	);
}
