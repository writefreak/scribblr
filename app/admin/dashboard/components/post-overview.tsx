import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const recentPosts = [
  {
    id: "1",
    title: "Mastering React Server Components",
    status: "Published",
    date: "Today",
  },
  {
    id: "2",
    title: "Tailwind CSS Best Practices",
    status: "Draft",
    date: "Today",
  },
  {
    id: "3",
    title: "Database Indexing 101",
    status: "Draft",
    date: "Last 2 days",
  },
  {
    id: "4",
    title: "UI/UX Design Trends in 2024",
    status: "Published",
    date: "Yesterday",
  },
];

export function PostOverview() {
  return (
    <Card className="px-3">
      <Table>
        <TableHeader>
          <TableRow className="font-space-grotesk">
            <TableHead className="w-75">Recent Posts</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell className="font-medium font-montserrat text-xs line-clamp-1">
                {post.title}
              </TableCell>
              <TableCell className="font-montserrat text-xs">
                <div className={getStatusStyles(post.status)}>
                  {post.status}
                </div>
              </TableCell>
              <TableCell className="text-right font-montserrat text-xs text-muted-foreground">
                {post.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

// Simple helper for status colors
const getStatusStyles = (status: any) => {
  switch (status.toLowerCase()) {
    case "published":
      return " text-green-600 ";
    case "draft":
      return "text-blue-800 ";
    default:
      return "";
  }
};
