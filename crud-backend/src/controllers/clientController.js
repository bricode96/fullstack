import * as clientServices from "../services/clientServices.js"

export const getClients = async (req, res) => {
    try {
        const clients = await clientServices.getClients();
        res.status(200).json(clients);
    } catch (error) {
        console.error('Error fetching clients:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const postClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientServices.postClient(clientData);
        res.status(200).json({ success: true, data: newClient });
    } catch (error) {
        console.error('Error adding client:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const putClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updatedClient = await clientServices.putClient(clientData, clientId);

        if (!updatedClient) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json(updatedClient);
    } catch (error) {
        console.error('Error updating client:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deleted = await clientServices.deleteClient(clientId);

        if (!deleted) {
            return res.status(404).json({ message: "Client not found" });
        }

        res.status(200).json({ success: true, message: "Client deleted successfully" });
    } catch (error) {
        console.error('Error deleting client:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export const searchClients = async (req, res) => {
    try {
        console.log(req.query); // <- para depuración
        const searchTerm = req.query?.q;
        if (!searchTerm) return res.status(400).json({ message: "Query parameter 'q' is required" });

        const clients = await clientServices.searchClients(searchTerm);
        res.status(200).json(clients);

    } catch (error) {
        console.error('Error searching clients:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

