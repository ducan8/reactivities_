import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { Activity } from "../../../lib/types";
import { DeleteForever } from "@mui/icons-material";

interface Props {
  activity: Activity;
  handleSelectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
}

export default function ActivityCard({
  activity,
  handleSelectActivity,
  deleteActivity,
}: Props) {
  return (
    <Card sx={{ borderRadius: 3 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">
            {activity.title}
            {"  "}
            <Chip
              label={activity.category}
              variant="filled"
              sx={{ fontWeight: "bold" }}
            />
          </Typography>
          <DeleteForever
            color="inherit"
            onClick={() => deleteActivity(activity.id)}
          ></DeleteForever>
        </Box>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {activity.date}
        </Typography>
        <Typography variant="subtitle2">{activity.description}</Typography>
        <Typography variant="body2">
          {activity.city} / {activity.venue}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="outlined"
          sx={{ color: "#343a40" }}
          onClick={() => handleSelectActivity(activity.id)}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
