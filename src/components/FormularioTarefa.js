import React, { useState } from 'react';


function FormularioTarefa({ adicionarTarefa }) {
    const [titulo, setTitulo] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo.trim()) {
            adicionarTarefa(titulo);
            setTitulo('');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nova Tarefa"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    );
}


export default FormularioTarefa;
