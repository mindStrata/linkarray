import { LinkChart } from "../charts/LinkChart";
import { UserChart } from "../charts/UserChart";
import { UserRegistrationChart } from "../charts/UserRegistrationChart";

export default function OverView() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:row-span-3 lg:col-span-2">
          <UserRegistrationChart />
        </div>
        <div>
          <LinkChart />
        </div>
        <div>
          <UserChart />
        </div>
      </div>
    </>
  );
}
