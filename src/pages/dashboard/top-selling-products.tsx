import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { topProductsData } from "../../constants/dashboard";

export default function TopProducts() {
  return (
    <Card className="w-full md:w-2/3 gap-2 border-none shadow-none bg-secondary">
      <CardHeader className="py-2">
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full border-collapse overflow-x-auto">
          <thead className="text-muted-foreground">
            <tr>
              {topProductsData.head.map((col) => (
                <th key={col} className="text-left p-2 border-b font-light">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-light text-sm">
            {topProductsData.rows.map((row, i) => (
              <tr key={i}>
                {topProductsData.head.map((col) => (
                  <td key={col} className="p-2 py-4">
                    {row[col as keyof typeof row]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
