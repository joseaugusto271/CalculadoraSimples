import { useState } from 'react'

function FormCalculadora() {
    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [operacao, setOperacao] = useState('')
    const [resultado, setResultado] = useState('')

    function calcular(e) {
        e.preventDefault()

        const num1 = Number(numero1)
        const num2 = Number(numero2)

        if(operacao == '+') {
            setResultado(num1 + num2)
        }
        else if(operacao == '-') {
            setResultado(num1 - num2)
        }
        else if(operacao == '*') {
            setResultado(num1 * num2)
        }
        else if(operacao == '/') {
            setResultado(num1 / num2)
        }
    }

    function limpar() {
        setNumero1('')
        setNumero2('')
        setResultado('')
    }
  return (
    <div>
        <h1>Calculadora Simples</h1>
        <form onSubmit={calcular}>
            <div className="entrada">
                <input
                    type="number"
                    name="num1"
                    id="num1"
                    placeholder='Primeiro Número'
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)} />
                <input
                    type="number"
                    name="num2"
                    id="num2"
                    placeholder='Primeiro Número' 
                    value={numero2}
                    onChange={(e) => setNumero2(e.target.value)}/>
                <select 
                name="operacoes" 
                id="operacoes" 
                onChange={(e) => setOperacao(e.target.value)}>
                    <option value="+">Adição (+)</option>
                    <option value="-">Subtração (-)</option>
                    <option value="*">Multiplicação (x)</option>
                    <option value="/">Divisão (/)</option>
                </select>
            </div>

            <div className="btn">
                <input type="submit" value="Calcular" />
                <input type="button" value="Limpar" onClick={limpar}/>
            </div>

            <div className="resultado">
                <h2>Resultado</h2>
                <p>{resultado}</p>
            </div>
        </form>
    </div>
  )
}

export default FormCalculadora