import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";

import workoutService from "../../services/workoutService";
import axios from "axios";
import type Workout from "../../models/workout";
import { useNavigate } from "react-router";
import { WORKOUT, WORKOUTS_ENDPOINT } from "../../constants/Endpoints";

export const useGetWorkout = (workoutId: number) => {
  const nav = useNavigate();
  return useQuery({
    queryKey: ["workout", workoutId],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      return workoutService.getWorkout(id as number); // cast to number if needed
    },
  });
};
