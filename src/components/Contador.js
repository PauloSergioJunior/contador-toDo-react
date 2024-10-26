import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';


function Contador() {
    // Estado que armazena a contagem inicial
    const [contagem, setContagem] = useState(0);
    // Função para incrementar a contagem
    const incrementar = () => {
        setContagem(contagem + 1);
    };
    // Função para decrementar a contagem
    const decrementar = () => {
        if (contagem > 0) {
            setContagem(contagem - 1);
        }else{
            Swal.fire('Erro!', 'Não é possivel decrametar a numeros negativos.', 'error');
        }
       
    };
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Contador de Cliques</h1>
            <p>Contagem atual: {contagem}</p>
            <Button  sx={{ backgroundColor:"green", color: 'black' }} onClick={incrementar}>Incrementar</Button>
            <Button sx={{ backgroundColor:"red", color: 'black' }} onClick={decrementar}>Decrementar</Button>
        </div>
    );
}
export default Contador;

