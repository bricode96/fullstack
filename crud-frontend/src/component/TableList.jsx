import axios from 'axios'
import { useState } from 'react'

export const TableList = ({ handleOpen, searchTerm, tableData, setTableData }) => {

    const [error, setError] = useState(null);

   const filteredData = tableData.filter(client =>
    (client.name?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
    (client.email?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
    (client.job?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
);


    const handleDelete = async (id) =>{
        const confirmDelete = window.confirm("Are you sure, you want to delete this")
        if(confirmDelete){
            try{
                await axios.delete(`http://localhost:3000/api/clients/${id}`)
                setTableData((prevData) => prevData.filter(client => client.id !== id))
            }catch(error){
                setError(error.message)
            }
        }
    }

    return (
        <>
            {error && (
                <div className="alert alert-error mt-5">
                    {error}
                </div>
            )}

            <div className="overflow-x-auto mt-20">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Job</th>
                            <th>Rate</th>
                            <th>Isactive</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody className="hover">
                        {filteredData.map(client => (
                            <tr key={client.id}>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>

                                <td>
                                    <button
                                        className={`btn rounded-full w-20 ${client.isactive
                                                ? 'btn-primary'
                                                : 'btn-outline btn-primary'
                                            }`}
                                    >
                                        {client.isactive ? 'Active' : 'Inactive'}
                                    </button>
                                </td>

                                <td className="flex gap-2">
                                    <button
                                        onClick={() => handleOpen('edit', client)}
                                        className="btn btn-secondary"
                                    >
                                        Update
                                    </button>

                                    <button className="btn btn-accent" onClick={() => handleDelete(client.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
