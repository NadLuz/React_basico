
import Input from './components/Input';
import Button from './components/Button';
import {Container, Content, Row} from './styles';
import { useState } from 'react';


const App = () => {

  // função que inicia o display da calculadora em zero
  const [currentNumber, setCurrentNumber] = useState('0');

  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // função que insere o valor dos botões
  const handleAddNumber = (num) => {
    setCurrentNumber(prev =>  `${prev === '0' ? '' : prev}${num}`)
  }

  // função que limpa o display da calculadora
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  // função que soma os números
  const handleSumNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('+')
    }else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  // função que subtrai os números
  const handleMinusNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('-')
    }else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus))
      setOperation('')
    }

  }

  // função que multiplica os números
  const handleMultNumbers = () => {

    if(firstNumber === '0'){
        setFirstNumber(String(currentNumber));
        setCurrentNumber('0')
        setOperation('*')
    }else {
      const mult = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(mult))
      setOperation('')
    }

  }

  // função que faz a divisão dos números
  const handleDivNumbers = () => {

    if(firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0')
      setOperation('/')
    }else {
      const sum = Number(firstNumber)/Number(currentNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }

  }

  // função que exibe os resultados
  const handleEquals = () => {

    if(firstNumber !== '0' && operation !== '' && currentNumber !== '0'){
        switch(operation){
          case '+':
            handleSumNumbers();
          break;
          case '-':
            handleMinusNumbers();
          break;
          case '*':
            handleMultNumbers();
          break;
          case '/':
            handleDivNumbers();
          break;          
          default: 
          break;
        }
    }

  }  

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="c" onClick={handleOnClear}/>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="*" onClick={handleMultNumbers}/>
          <Button label="/" onClick={handleDivNumbers}/>
          
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={handleMinusNumbers}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={handleSumNumbers}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEquals}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
