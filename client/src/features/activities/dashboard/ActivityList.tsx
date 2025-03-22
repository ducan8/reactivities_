import { Box, Typography } from "@mui/material";
import { Activity } from "../../../lib/types";
import ActivityCard from "./ActivityCard";
import { useActivites } from "../../../lib/hooks/useActivites";

export default function ActivityList() {
  const { activities, isPending } = useActivites();

  if (!activities || isPending)
    return <Typography variant="h3">Loading...</Typography>;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity: Activity) => {
        return <ActivityCard key={activity.id} activity={activity} />;
      })}
    </Box>
  );
}
