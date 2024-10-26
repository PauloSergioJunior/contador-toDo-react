import React from 'react';


function Tarefa({ tarefa, marcarConcluida, removerTarefa }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={tarefa.concluida}
                onChange={() => marcarConcluida(tarefa.id)}
            />
            <span style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
                {tarefa.titulo}
            </span>
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
        </li>
    );
}


export default Tarefa;