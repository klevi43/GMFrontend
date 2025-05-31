import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { SetInput } from "../../types/inputTypes";
import { useMod } from "../useMod";
import { getExerciseId, getWorkoutId } from "../../utils/QueryParamHelpers";
import type SetDto from "../../dtos/setDto";
import setService from "../../services/setService";
import axios from "axios";

export const useAddSet = (): UseBaseMutationResult<
  SetDto,
  unknown,
  SetInput,
  unknown
> => {
  const { closeModal } = useMod();
  const workoutId = getWorkoutId();
  const exerciseId = getExerciseId();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (setInput: SetInput) => {
      try {
        return await setService.addSet(setInput, exerciseId, workoutId);
      } catch (error) {
        let message = "Unable to add set. Please try again later.";
        if (axios.isAxiosError(error) && error.response) {
          message = error.response?.data?.message;
        }
        throw new Error(message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workout"] });
      closeModal();
    },
  });
};
