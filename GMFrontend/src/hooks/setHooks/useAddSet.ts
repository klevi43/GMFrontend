import type { UseBaseMutationResult } from "@tanstack/react-query"
import type { SetInput } from "../../types/inputTypes"
import { useMod } from "../useMod"

export cosnt useAddSet = (

): UseBaseMutationResult<SetDto, unknown, SetInput, unknown> => {
  const {closeModal} = useMod();
  const workoutId
}