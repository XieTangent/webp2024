import './App.css';
import { Button } from '@material-ui/core';

const changeText = (event) => {
  console.log(event.target);
  event.target.innerText = event.target.innerText + "被點了";
}

const multiButton = (num) => {
  var output = [];
  for (let i = 1; i <= num; i++) {
    output.push(<Button variant="contained" color='primary' onClick={changeText}>按钮{i}</Button>);
  }
  return output;
}

export default multiButton;
