import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Activity } from "../../../lib/types";
import { FormEvent } from "react";
import { useActivites } from "../../../lib/hooks/useActivites";
import { useNavigate, useParams } from "react-router";

export default function ActivityForm() {
  const { id } = useParams();
  const { updateActivity, createActivity, activity, isLoadingActivity } =
    useActivites(id);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) {
      data["id"] = activity.id;
      await updateActivity.mutateAsync(data as unknown as Activity);
      navigate(`/activities/${activity.id}`);
    } else {
      createActivity.mutate(data as unknown as Activity, {
        onSuccess: (id) => navigate(`/activities/${id}`),
      });
    }
  };

  if (isLoadingActivity)
    return <Typography variant="h3">Loading Activities...</Typography>;
  return (
    <Paper sx={{ borderRadius: 3, padding: 3, height: "90vh" }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#003566" }}>
        {activity ? "Edit " : "Create "} Activity
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        display={"flex"}
        flexDirection={"column"}
        gap={3}
      >
        <TextField name="title" label="Title" defaultValue={activity?.title} />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={3}
          defaultValue={activity?.description}
        />
        <TextField
          name="category"
          label="Category"
          defaultValue={activity?.category}
        />
        <TextField
          name="date"
          type="date"
          defaultValue={
            activity?.date
              ? new Date(activity.date).toISOString().split("T")[0]
              : new Date().toISOString().split("T")[0]
          }
        />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
        <Box display={"flex"} justifyContent={"end"} gap={3}>
          <Button color="inherit" onClick={() => {}}>
            Cancel
          </Button>
          <Button
            loading={updateActivity.isPending || createActivity.isPending}
            type="submit"
            color="success"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
