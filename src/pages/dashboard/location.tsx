import { useTheme } from "next-themes";
import worldMapDark from "/assets/dashboard/dark-map.png";
import worldMap from "/assets/dashboard/map.png";
import { revenueLocations } from "../../constants/dashboard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

const RevenueLocation = () => {
  const { theme } = useTheme();

  return (
    <Card className="flex-1 flex flex-col gap-2 border-0 shadow-none bg-secondary">
      <CardHeader className="items-center pb-0">
        <CardTitle>Revenue by Location</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={theme == "dark" ? worldMapDark : worldMap}
          alt="image"
          className="w-full mb-2"
        />
        <div className="w-full flex flex-col gap-4 text-sm font-light">
          {revenueLocations?.map((item, i) => (
            <div key={i} className="flex flex-col gap-[2px] justify-between">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <p className={`font-normal text-text-primary`}>
                    {item?.place}
                  </p>
                </div>
                <p
                >
                  {item?.revenue}K
                </p>
              </div>
              <div className={`h-[3px] rounded-full bg-[var(--cyan-light)]`}>
                <div
                  className="h-full rounded-full bg-[var(--cyan)]"
                  style={{ width: `${item?.revenue}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueLocation;
