import { useEffect, useState } from "react";
import { Activity } from "../../lib/types";
import axios from "axios";
import Navbar from "./Navbar";
import { Box, Container, CssBaseline } from "@mui/material";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    axios
      .get("https://localhost:5000/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find((a) => a.id == id));
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

  const handleSubmitForm = (activity: Activity) => {
    if (activity.id) {
      setActivities(
        activities.map((x) => (x.id == activity.id ? activity : x))
      );
    } else {
      const newActivity = {
        ...activity,
        id: (Math.random() * activities.length).toString(),
      };
      setActivities([newActivity, ...activities]);
    }
  };

  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(x => x.id != id))
  }

  return (
    <Box sx={{ backgroundColor: "#e9ecef" }}>
      <CssBaseline />
      <Navbar openForm={handleOpenForm} />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <ActivityDashboard
          activities={activities}
          handleSelectActivity={handleSelectActivity}
          cancelSelectActivity={cancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Box>
  );
}

export default App;
