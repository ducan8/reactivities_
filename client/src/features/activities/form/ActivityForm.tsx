import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Activity } from "../../../lib/types";
import { FormEvent } from "react";

interface Props {
  closeForm: () => void;
  activity: Activity | undefined;
  submitForm: (a: Activity) => void;
}

export default function ActivityForm({
  closeForm,
  activity,
  submitForm,
}: Props) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData);

    const data: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (activity) data["id"] = activity.id;
    submitForm(data as unknown as Activity);
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
        <TextField name="date" type="date" defaultValue={activity?.date} />
        <TextField name="city" label="City" defaultValue={activity?.city} />
        <TextField name="venue" label="Venue" defaultValue={activity?.venue} />
        <Box display={"flex"} justifyContent={"end"} gap={3}>
          <Button color="inherit" onClick={() => closeForm()}>
            Cancel
          </Button>
          <Button type="submit" color="success" variant="contained">
            Submit
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
