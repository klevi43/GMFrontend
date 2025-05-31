import type { UseMutationResult } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import React from "react";
import { useModal } from "../../../hooks/useModal";
import FormContainer from "../../containers/FormContainer";
import ModalContainer from "../../containers/ModalContainer";
import ExerciseForm from "../../form/exerciseForm/ExerciseForm";
import { getExerciseId } from "../../../utils/QueryParamHelpers";

const AddSetFormModal = () => {
  const mutation = useAddSet();
  const exerciseId = getExerciseId();
  const onSubmit = async () => {};
  return (
    <>
      <ModalContainer>
        <FormContainer>
          <ExerciseForm
            onSubmit={onSubmit}
            title="Add Exercise"
            defaultValues={{ name: "", exerciseId: exerciseId }}
            field={{ name: "name", label: "Exercise Name", type: "text" }}
            error={mutation.error}
          />
        </FormContainer>
      </ModalContainer>
    </>
  );
};

export default AddSetFormModal;
