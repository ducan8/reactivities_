import { Box } from "@mui/material";
import { Activity } from "../../../lib/types";
import ActivityCard from "./ActivityCard";

interface Props {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityList({
  activities,
  handleSelectActivity,
  deleteActivity,
}: Props) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {activities.map((activity: Activity) => {
        return (
          <ActivityCard
            key={activity.id}
            activity={activity}
            handleSelectActivity={handleSelectActivity}
            deleteActivity={deleteActivity}
          />
        );
      })}
    </Box>
  );
}
