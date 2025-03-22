import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Activity } from "../../../lib/types";
import { AccessTime, Place } from "@mui/icons-material";
import { Link } from "react-router";
import { formatDate } from "../../../lib/util/util";

interface Props {
  activity: Activity;
}

export default function ActivityCard({ activity }: Props) {
  const isHost = false;
  const isGoing = false;
  const label = isHost ? "You are hosting" : "You are going";
  const isCancelled = false;
  const color = isHost ? "secondary" : isGoing ? "warning" : "default";

  return (
    <Card sx={{ borderRadius: 3 }}>
      <Box
        display={"flex"}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <CardHeader
          avatar={<Avatar sx={{ height: 50, width: 50 }} />}
          title={activity.title}
          slotProps={{
            title: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
          subheader={
            <>
              Hosted by{" "}
              <Link style={{ textDecoration: "none" }} to={`/profiles/bob`}>
                Bob
              </Link>
            </>
          }
        />
        <Box display={"flex"} flexDirection={"column"} gap={2} mr={2}>
          {(isHost || isGoing) && (
            <Chip label={label} color={color} sx={{ borderRadius: 2 }} />
          )}
          {isCancelled && (
            <Chip label="Cancelled" color="error" sx={{ borderRadius: 2 }} />
          )}
        </Box>
      </Box>

      <Divider sx={{}} />
      <CardContent>
        <Box display={"flex"} alignItems={"center"} mb={2}>
          <Box display={"flex"} flexGrow={0} alignItems={"center"}>
            <AccessTime sx={{ mr: 1 }} />
            <Typography variant="body2" noWrap>
              {formatDate(activity.date)}
            </Typography>
          </Box>
          <Place sx={{ ml: 3, mr: 1 }} />
          <Typography variant="body2">{activity.venue}</Typography>
        </Box>
        <Divider />
        <Box
          display={"flex"}
          gap={2}
          sx={{ backgroundColor: "grey.200", py: 3, pl: 3 }}
        >
          Attendees go here
        </Box>
      </CardContent>
      <CardContent sx={{ pb: 2 }}>
        <Typography variant="body2">{activity.description}</Typography>
        <Button
          component={Link}
          to={`/activities/${activity.id}`}
          size="medium"
          variant="contained"
          sx={{
            display: "flex",
            justifySelf: "self-end",
            borderRadius: 3,
            backgroundColor: "#343a40",
          }}
        >
          View
        </Button>
      </CardContent>
    </Card>
  );
}
