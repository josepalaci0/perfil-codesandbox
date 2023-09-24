import "./styles.css";
import Home from "./home";
import { Hv } from "./utils/hv";

export default function App() {
  return Home(Hv());
}
