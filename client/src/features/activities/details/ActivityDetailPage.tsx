import { Grid2, Typography } from "@mui/material";
import { useActivites } from "../../../lib/hooks/useActivites";
import { useParams } from "react-router";
import ActivityDetailHeader from "./ActivityDetailHeader";
import ActivityDetailInfo from "./ActivityDetailInfo";
import ActivityDetailChat from "./ActivityDetailChat";
import ActivityDetailSidebar from "./ActivityDetailSidebar";

export default function ActivityDetail() {
  const { id } = useParams();
  const { activity, isLoadingActivity } = useActivites(id as unknown as string);

  if (isLoadingActivity)
    return <Typography variant="h5">Loading...</Typography>;
  if (!activity)
    return <Typography variant="h5">Activity not found...</Typography>;
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={8}>
        <ActivityDetailHeader activity={activity} />
        <ActivityDetailInfo activity={activity} />
        <ActivityDetailChat />
      </Grid2>
      <Grid2 size={4}>
        <ActivityDetailSidebar />
      </Grid2>
    </Grid2>
  );
}
