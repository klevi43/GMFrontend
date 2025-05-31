import type { UseMutationResult } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
import React from "react";
import { useModal } from "../../../hooks/useModal";

interface Props {
  title: string;
  mutation: UseMutationResult<AxiosResponse<any>, unknown, T, unknown>;
}
const AddSetModal = <T,>({ title, mutation }: Props) => {
  const { queryParams, closeModal } = useModal();
  const handleSubmit = async () => {
    try {
      if (queryParams) {
        mutation.mutateAsync();
      }
    } catch (error) {}
  };
  return <div>AddSetModal</div>;
};

export default AddSetModal;
