import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Activity } from "../types";
import agent from "../api/agent";

export const useActivites = (id?: string) => {
  const queryClient = useQueryClient();

  //GetAll
  const { data: activities, isPending } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const response: Activity[] = await agent
        .get<Activity[]>("/activities")
        .then((res) => res.data);
      return response;
    },
  });

  //GetDetail
  const { data: activity, isLoading: isLoadingActivity } = useQuery({
    queryKey: ["activities", id],
    queryFn: async () => {
      const response: Activity = await agent
        .get<Activity>(`/activities/${id}`)
        .then((res) => res.data);
      return response;
    },
    enabled: !!id,
  });

  //Create
  const createActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      return await agent.post("/activities", activity).then((res) => res.data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  //Update
  const updateActivity = useMutation({
    mutationFn: async (activity: Activity) => {
      await agent.put("/activities", activity);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  //Delete
  const deleteActivity = useMutation({
    mutationFn: async (id: string) => {
      await agent.delete("/activities/" + id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["activities"] });
    },
  });

  return {
    activities,
    isPending,
    updateActivity,
    createActivity,
    deleteActivity,
    activity,
    isLoadingActivity,
  };
};
