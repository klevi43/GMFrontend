import {
  useMutation,
  useQueryClient,
  type UseBaseMutationResult,
} from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import type { SetInput } from "../../types/inputTypes";
import {
  getExerciseId,
  getSetId,
  getWorkoutId,
} from "../../utils/QueryParamHelpers";
import { useMod } from "../useMod";
import setService from "../../services/setService";
import axios from "axios";
import type SetDto from "../../dtos/setDto";

export const useUpdateSet = (): UseBaseMutationResult<
  SetDto,
  unknown,
  SetInput,
  unknown
> => {
  const queryClient = useQueryClient();
  const workoutId = getWorkoutId();
  const exerciseId = getExerciseId();
  const setId = getSetId();
  const { closeModal } = useMod();

  return useMutation({
    mutationFn: async (setInput: SetInput) => {
      try {
        return await setService.updateSet(
          setInput,
          setId,
          exerciseId,
          workoutId
        );
      } catch (error) {
        let message = "Unable to update workout. Please try again later.";
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
