import patients from "../../data/patients";
import { Patient } from "../types";
import {PatientWithoutSSN} from "../types";
import { v1 as uuid } from 'uuid'

const patientsData: Array<Patient> = patients;

const getAll = (): Array<PatientWithoutSSN> => {
  return patientsData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (newPatient: Array<PatientWithoutSSN>): Array<PatientWithoutSSN> => {
  const newPatientWithId = {
    id: uuid(),
    ...newPatient
  };
  patients.push(newPatientWithId);
};


export default {
  getAll,addPatient
};