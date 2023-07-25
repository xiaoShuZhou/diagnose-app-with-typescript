import diagnoses from "../../data/diagnoses";
import { Diagnose } from "../types";

const diagnosesData: Array<Diagnose> = diagnoses;

const getAll = (): Array<Diagnose> => {
  return diagnosesData;
};

export default {
  getAll,
};