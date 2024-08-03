import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';


//estos son los estados
function Conversor() {
  const [textoAVoz, setTextoAVoz] = useState('');
  const [vozATexto, setVozATexto] = useState('');

  
  function resultado(event) {
    setVozATexto(event.results[0][0].transcript);
  }

  function cambiarTexto(evento) {
    setTextoAVoz(evento.target.value);
  }

  function grabarVozATexto() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.onresult = resultado;
    recognition.start();
  }

  function convertirTextoAVoz() {
    if (window.speechSynthesis) {
      const synth = window.speechSynthesis;
      const utterThis = new SpeechSynthesisUtterance(textoAVoz);
      utterThis.lang = 'es-ES';
      synth.speak(utterThis);
    } else {
      alert('La síntesis de voz no es compatible con este navegador.');
    }
  }
  return (
      <>
      <h1>Conversor TTS y STT</h1>
      <br />
      <h3>Conversor de Texto a Voz</h3>
      <input type="text" id="textoAVoz" value={textoAVoz} onChange={cambiarTexto} />
      <button onClick={convertirTextoAVoz}>Convertir</button>

      <h3>Conversor de Voz a Texto</h3>
      <button onClick={grabarVozATexto}>Grabar</button>
      <p>{vozATexto}</p>
      </>
    );
}
export default Conversor;

