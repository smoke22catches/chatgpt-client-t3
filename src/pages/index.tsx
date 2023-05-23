import { type NextPage } from "next";
import { Roboto } from "next/font/google";
import WelcomeScreen from "./components/modules/WelcomeScreen";

const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: ["300", "500"],
  fallback: ["sans-serif"],
});

const Home: NextPage = () => {
  return (
    <div className={roboto.className}>
      <WelcomeScreen />
    </div>
  );
};

export default Home;
