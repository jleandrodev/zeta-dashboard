import TasksResults from "@/ui/components/data-display/charts/TasksResults";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <h1>Dashboard</h1>
      <TasksResults />
    </Box>
  );
}
