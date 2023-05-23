import { RxSun, RxLightningBolt } from "react-icons/rx";
import { IoWarningOutline } from "react-icons/io5";
import ClickableCard from "../elements/ClickableCard";
import Card from "../elements/Card";

export default function WelcomeScreen() {
  return (
    <div>
      <h1 className="mt-[15%] text-center text-5xl font-medium">ChatGPT</h1>
      <div className="mx-[15%] mt-10 flex flex-row gap-3 text-center">
        <div className="flex flex-col gap-5">
          <h2 className="flex flex-col items-center gap-1 text-lg">
            <RxSun />
            Examples
          </h2>
          <div className="flex flex-col gap-3">
            <ClickableCard>
              Explain quantum computing in simple terms
            </ClickableCard>
            <ClickableCard>
              Got any creative ideas for a 10 year old&apos;s birthday?
            </ClickableCard>
            <ClickableCard>
              How do I make an HTTP request in JavaScript?
            </ClickableCard>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="flex flex-col items-center gap-1 text-lg">
            <RxLightningBolt />
            Capabilitites
          </h2>
          <div className="flex flex-col gap-3">
            <Card>Remembers what user said earlier in the conversation</Card>
            <Card>Allows user to provide follow-up corrections</Card>
            <Card>Trained to decline inappropriate requests</Card>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="flex flex-col items-center gap-1 text-lg">
            <IoWarningOutline />
            Limitations
          </h2>
          <div className="flex flex-col gap-3">
            <Card>May occasionally generate incorrect information</Card>
            <Card>
              May occasionally produce harmful instructions or biased content
            </Card>
            <Card>Limited knowledge of world and events after 2021</Card>
          </div>
        </div>
      </div>
    </div>
  );
}
