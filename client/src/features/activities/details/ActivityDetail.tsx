import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Activity } from "../../../lib/types";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id?: string) => void;
}

export default function ActivityDetail({
  activity,
  cancelSelectActivity,
  openForm,
}: Props) {
  return (
    <Card sx={{ mb: 3 }}>
      <CardMedia
        component={"img"}
        src={`/images/categoryImages/${activity.category}.jpg`}
      />
      <CardContent>
        <Typography variant="h6">{activity.title}</Typography>
        <Typography variant="subtitle1" fontWeight={"light"}>
          {activity.date}
        </Typography>
        <Typography variant="subtitle2">{activity.description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: "#343a40" }}
          variant="outlined"
          onClick={() => openForm(activity.id)}
        >
          Edit
        </Button>
        <Button color="inherit" onClick={() => cancelSelectActivity()}>
          Cancel
        </Button>
      </CardActions>
    </Card>
  );
}
