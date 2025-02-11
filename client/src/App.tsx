import { useEffect, useState } from "react";
import { Activity } from "./lib/types";
import axios from "axios";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get("https://localhost:5000/api/activities")
      .then((res) => setActivities(res.data));
  }, []);

  return (
    <div>
      <h2>Reactivities</h2>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.id}>{activity.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
