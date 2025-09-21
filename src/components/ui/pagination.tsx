import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";

type Props = {
  page: number;
  setPage: any;
  totalPages: number;
};

export default function Pagination({ page, setPage, totalPages }: Props) {
  return (
    <div className="flex items-center justify-end space-x-2 mt-4">
      <Button
        variant="ghost"
        size="sm"
        disabled={page === 1}
        onClick={() => setPage((p: number) => Math.max(1, p - 1))}
      >
        <ChevronLeft size={18} />
      </Button>
      {[...Array(totalPages)].map((_, i) => (
        <Button
          key={i}
          variant={page === i + 1 ? "default" : "ghost"}
          size="sm"
          onClick={() => setPage(i + 1)}
          className={`hover:bg-muted-background ${
            page === i + 1 ? "bg-muted-background text-foreground" : ""
          }`}
        >
          {i + 1}
        </Button>
      ))}
      <Button
        variant="ghost"
        size="sm"
        disabled={page === totalPages}
        onClick={() => setPage((p: number) => Math.min(totalPages, p + 1))}
      >
        <ChevronRight size={18} />
      </Button>
    </div>
  );
}
