import { INITIAL_DATA_NOT_SET_MSG } from "../../constants/errorMsgs";
import type { DtoTypes, ModType } from "../../types/modContextType";
import AddWorkoutFormModal from "./workoutModals/AddWorkoutFormModal";
import UpdateWorkoutFormModal from "./workoutModals/UpdateWorkoutFormModal";

import {
  isExerciseDto,
  isSetDto,
  isUserResponseDto,
  isWorkoutDto,
} from "../../typeGuards/typeGuards";
import AdminDeleteUserModal from "./adminModals/AdminDeleteUserModal";
import AdminDemoteAdminModal from "./adminModals/AdminDemoteAdminModal";
import AdminPromoteUserModal from "./adminModals/AdminPromoteUserModal";
import AddExerciseFormModal from "./exerciseModals/AddExerciseFormModal";
import DeleteExerciseFormModal from "./exerciseModals/DeleteExerciseFormModal";
import UpdateExerciseFormModal from "./exerciseModals/UpdateExerciseFormModal";
import AddSetFormModal from "./setModals/AddSetFormModal";
import DeleteSetFormModal from "./setModals/DeleteSetFormModal";
import UpdateSetFormModal from "./setModals/UpdateSetFormModal";
import DeleteUserModal from "./userModals/DeleteUserModal";
import UpdateUserEmailFormModal from "./userModals/UpdateUserEmailFormModal";
import UpdateUserPasswordModal from "./userModals/UpdateUserPasswordModal";
import DeleteWorkoutModal from "./workoutModals/DeleteWorkoutModal";
interface Props {
  type: ModType | null;
  initialData: DtoTypes | null;
}
const ModalRenderer = ({ type, initialData }: Props) => {
  switch (type) {
    case "ADMIN_DELETE_USER": {
      if (!initialData || !isUserResponseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <AdminDeleteUserModal initialData={initialData} />;
    }
    case "ADMIN_PROMOTE_USER":
      if (!initialData || !isUserResponseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <AdminPromoteUserModal initialData={initialData} />;
    case "ADMIN_DEMOTE_ADMIN":
      if (!initialData || !isUserResponseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <AdminDemoteAdminModal initialData={initialData} />;
    case "UPDATE_USER_EMAIL":
      return <UpdateUserEmailFormModal />;
    case "UPDATE_USER_PASSWORD":
      return <UpdateUserPasswordModal />;
    case "DELETE_USER_INFO":
      return <DeleteUserModal />;
    case "ADD_WORKOUT":
      return <AddWorkoutFormModal />;
    case "UPDATE_WORKOUT":
      if (!initialData || !isWorkoutDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateWorkoutFormModal initialData={initialData} />;
    case "DELETE_WORKOUT":
      console.log(initialData);
      console.log(!isWorkoutDto(initialData));
      if (!initialData || !isWorkoutDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteWorkoutModal initialData={initialData} />;
    case "ADD_EXERCISE":
      return <AddExerciseFormModal />;

    case "UPDATE_EXERCISE":
      if (!initialData || !isExerciseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateExerciseFormModal initialData={initialData} />;
    case "DELETE_EXERCISE":
      if (!initialData || !isExerciseDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteExerciseFormModal initialData={initialData} />;
    case "ADD_SET":
      return <AddSetFormModal />;
    case "UPDATE_SET":
      if (!initialData || !isSetDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <UpdateSetFormModal initialData={initialData} />;
    case "DELETE_SET":
      if (!initialData || !isSetDto(initialData)) {
        throw new Error(INITIAL_DATA_NOT_SET_MSG);
      }
      return <DeleteSetFormModal initialData={initialData} />;
    default:
      return <></>;
  }
};

export default ModalRenderer;
