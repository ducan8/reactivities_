import { Grid2 } from "@mui/material";
import { Activity } from "../../../lib/types";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  handleSelectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  selectedActivity: Activity | undefined;
  editMode: boolean;
  openForm: (id?: string) => void;
  closeForm: () => void;
}

export default function ActivityDashboard({
  activities,
  handleSelectActivity,
  cancelSelectActivity,
  selectedActivity,
  editMode,
  openForm,
  closeForm,
}: Props) {
  return (
    <Grid2 container spacing={3}>
      <Grid2 size={7}>
        <ActivityList
          activities={activities}
          handleSelectActivity={handleSelectActivity}
        />
      </Grid2>
      <Grid2 size={5}>
        {selectedActivity && !editMode && (
          <ActivityDetail
            selectedActivity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && (
          <ActivityForm closeForm={closeForm} activity={selectedActivity} />
        )}
      </Grid2>
    </Grid2>
  );
}
