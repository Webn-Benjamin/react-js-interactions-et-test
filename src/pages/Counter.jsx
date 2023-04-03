import { useState, useCallback } from 'react';

function Counter(props) {
  const [counter, setCounter] = useState(0)

  const [historique, setHistorique] = useState([])
  const histoCounter = useCallback((value) => {
    historique.push(counter)
    setHistorique(historique)
    setCounter(value)
  }, [historique, counter])

  return (
    <div>
      {counter} : Le compteur est {counter % 2 ? 'impair' : 'pair'}.<br />
      <button
        className='btn btn-danger me-1'
        onClick={() => histoCounter(counter - 1)}
      >-</button>
      <button
      className='btn btn-success'
        onClick={() => histoCounter(counter + 1)}
      >+</button>
      <br />
      {historique.map((histo, i) => <div key={i}>valeur {i} : {histo}</div>)}
    </div>
  );
}

export default Counter;