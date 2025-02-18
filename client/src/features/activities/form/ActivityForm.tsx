import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Activity } from "../../../lib/types";
import { FormEvent } from "react";
import { useActivites } from "../../../lib/hooks/useActivites";

interface Props {
  closeForm: () => void;
  activity: Activity | undefined;
}

export default function ActivityForm({ closeForm, activity }: Props) {
  const { updateActivity, createActivity } = useActivites();

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
    } else {
      await createActivity.mutateAsync(data as unknown as Activity);
    }
    closeForm();
  };

  return (
    <Paper sx={{ borderRadius: 3, padding: 3 }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#003566" }}>
        Create Activity
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
          <Button color="inherit" onClick={() => closeForm()}>
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
