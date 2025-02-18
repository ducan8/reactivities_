import { useState } from "react";
import { Activity } from "../../lib/types";
import Navbar from "./Navbar";
import { Box, Container, CssBaseline, Typography } from "@mui/material";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivites } from "../../lib/hooks/useActivites";

function App() {
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const { activities, isPending } = useActivites();

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities!.find((a) => a.id == id));
  };

  const cancelSelectActivity = () => {
    setSelectedActivity(undefined);
  };

  const handleOpenForm = (id?: string) => {
    if (id) handleSelectActivity(id);
    else cancelSelectActivity();
    setEditMode(true);
  };

  const handleCloseForm = () => {
    setEditMode(false);
  };

  return (
    <Box sx={{ backgroundColor: "#e9ecef", minHeight: "100%" }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        {!activities || isPending ? (
          <Typography variant="h5">Loading...</Typography>
        ) : (
          <ActivityDashboard
            activities={activities}
            handleSelectActivity={handleSelectActivity}
            cancelSelectActivity={cancelSelectActivity}
            selectedActivity={selectedActivity}
            editMode={editMode}
            openForm={handleOpenForm}
            closeForm={handleCloseForm}
          />
        )}
      </Container>
    </Box>
  );
}

export default App;
