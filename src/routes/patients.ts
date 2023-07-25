import express from "express";
import patientService from "../services/patientService";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(patientService.getAll());
});

router.post("/", (_req, res) => {
  const newPatient = patientService.addPatient(res.body);
  res.json(newPatient);
  
});

export default router;