import { AppRoutes } from "../app.routes/App.routes";
import { Header } from "../header/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </>
  );
}
