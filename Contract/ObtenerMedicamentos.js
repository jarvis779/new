import Web3 from 'web3';
import medicationTracker from './MedicationTracker.json'

// Asegúrate de tener la dirección del contrato y el ABI correctos
const contractAddress = '0xde725c0417d9e5794b9f4868cd15e187b40742aa'; // Reemplaza con la dirección de tu contrato
const contractABI = [medicationTracker.abi];

// Inicializa web3
const web3 = new Web3(window.ethereum);

// Conecta con el contrato
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function obtenerMedicamentos() {
 try {
    // Obtiene el recuento de medicamentos
    const medicationCount = await contract.methods.medicationCount().call();

    // Obtiene la información de cada medicamento
    const medicamentos = [];
    for (let i = 1; i <= medicationCount; i++) {
      const medication = await contract.methods.medications(i).call();
      medicamentos.push(medication);
    }

    return medicamentos;
 } catch (error) {
    console.error("Error al obtener medicamentos:", error);
 }
}

export default obtenerMedicamentos;