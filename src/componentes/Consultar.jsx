import React, { useEffect, useState } from 'react';

function Consultar({ dataUpdated }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [dataUpdated]); // Agregar dataUpdated como dependencia

    const fetchData = () => {
        fetch('https://alejo1016.000webhostapp.com/api.php?apicall=readusuario')
            .then(response => response.json())
            .then(data => setData(data.contenido))
            .catch(error => console.log(error));
    };

    return (
        <div className="consultar-container">
            <h2>Elementos de la tabla Mueble:</h2>
            <ul>
                {Array.isArray(data) ? (
                    data.map(item => (
                        <li key={item.Id_accesorio}>
                            <p>Id_accesorio: {item.Id_accesorio}</p>
                            <p>nombre: {item.nombre}</p>
                            <p>precio: {item.precio}</p>
                            <p>tipo_de_accesorio: {item.tipo_de_accesorio}</p>




                        </li>
                    ))
                ) : (
                    <p>No hay datos disponibles</p>
                )}
            </ul>
        </div>
    );



}

export default Consultar;