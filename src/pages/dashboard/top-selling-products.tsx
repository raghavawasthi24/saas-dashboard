import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

export default function TopProducts() {
  const data = {
    head: ["Name", "Price", "Quantity", "Amount"],
    rows: [
      {
        Name: "ASOS Ridley High Waist",
        Price: "$79.49",
        Quantity: 82,
        Amount: "$6,518.18",
      },
      {
        Name: "Marco Lightweight Shirt",
        Price: "$128.50",
        Quantity: 37,
        Amount: "$4,754.50",
      },
      {
        Name: "Half Sleeve Shirt",
        Price: "$39.99",
        Quantity: 64,
        Amount: "$2,559.36",
      },
      {
        Name: "Lightweight Jacket",
        Price: "$20.00",
        Quantity: 184,
        Amount: "$3,680.00",
      },
      {
        Name: "Marco Shoes",
        Price: "$79.49",
        Quantity: 64,
        Amount: "$1,965.81",
      },
    ],
  };

  return (
    <Card className="w-full md:w-2/3 gap-2 border-none shadow-none bg-secondary">
      <CardHeader className="py-2">
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <table className="w-full border-collapse overflow-x-auto">
          <thead className="text-muted-foreground">
            <tr>
              {data.head.map((col) => (
                <th key={col} className="text-left p-2 border-b font-light">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-light text-sm">
            {data.rows.map((row, i) => (
              <tr key={i}>
                {data.head.map((col) => (
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
