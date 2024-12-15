// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MedicationTracker {
    enum Status {Created, DeliveredToHospital, Prescribed, DeliveredToPatient}

    struct Medication {
        string name;
        uint256 quantity;
        address provider;
        address hospital;
        address doctor;
        address patient;
        Status status;
    }

    mapping(uint256 => Medication) public medications;
    uint256 public medicationCount;

    event MedicationCreated(uint256 indexed id, string name, uint256 quantity, address provider);
    event MedicationDeliveredToHospital(uint256 indexed id, address hospital);
    event MedicationPrescribed(uint256 indexed id, address doctor, address patient);
    event MedicationDeliveredToPatient(uint256 indexed id, address patient);

    function createMedication(string memory _name, uint256 _quantity) public {
        medicationCount++;
        medications[medicationCount] = Medication(_name, _quantity, msg.sender, address(0), address(0), address(0), Status.Created);
        emit MedicationCreated(medicationCount, _name, _quantity, msg.sender);
    }

    function deliverToHospital(uint256 _id, address _hospital) public {
        Medication storage medication = medications[_id];
        require(medication.status == Status.Created, "Medication must be in Created status.");
        medication.hospital = _hospital;
        medication.status = Status.DeliveredToHospital;
        emit MedicationDeliveredToHospital(_id, _hospital);
    }

    function prescribeMedication(uint256 _id, address _doctor, address _patient) public {
        Medication storage medication = medications[_id];
        require(medication.status == Status.DeliveredToHospital, "Medication must be delivered to a hospital.");
        medication.doctor = _doctor;
        medication.patient = _patient;
        medication.status = Status.Prescribed;
        emit MedicationPrescribed(_id, _doctor, _patient);
    }

    function deliverToPatient(uint256 _id) public {
        Medication storage medication = medications[_id];
        require(medication.status == Status.Prescribed, "Medication must be prescribed.");
        require(msg.sender == medication.patient, "Only the patient can pick up the medication.");
        medication.status = Status.DeliveredToPatient;
        emit MedicationDeliveredToPatient(_id, medication.patient);
    }
}