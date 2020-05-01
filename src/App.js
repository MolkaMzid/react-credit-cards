
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      CardNumber:"****************",
      date:"**/**"
      }
  }
  addname=(event)=>{
this.setState({
  name:event.target.value
})

  }
  addNumber=(e)=>{
this.setState({
  CardNumber:e.target.value
})
  }
  addDate=(e)=>{
this.setState({
  date:e.target.value
})
  }
  render() { 
    return ( <div>
      <input type='text' placeholder='name' onChange={(event)=>this.addname(event)}/>
      <input type='text' placeholder='card number' maxLength="16" onChange={(e)=>this.addNumber(e)}/>
      <input type='text' placeholder='MM/AA' onChange={(e)=>this.addDate(e)}/>
     <br>
     </br>

      <div className='credit-card'>
           
      <div className='credit-card__logo'>Logo goes here</div>
            <div className='credit-card__number'>{(this.state.CardNumber.length!==16&&this.state.CardNumber.match(/^[a-zA-Z]/g))?alert('invalid card number'):this.state.CardNumber.padEnd(16,'*')}</div>
            
            <div className='credit-card__info'>
                <div className='credit-card__info_name'>
                    <div className='credit-card__info_label'>CARDHOLDER'S NAME</div>
                   <div> {(this.state.name.match(/^[a-zA-Z]+$/g)&&this.state.name.length<20)?this.state.name.toUpperCase():alert('invalid name')}</div>
                </div>

                <div className='credit-card__info_expiry'>
                    <div className='credit-card__info_label'>VALID UP TO</div>
                    <div>{((this.state.date.length>5)||(this.state.date.match(/^[a-zA-Z]/g)||parseInt(this.state.date.slice(0,2))>12))?alert('invalid date'):this.state.date.padEnd(5,'*')}</div>
                </div>
            </div>

        </div>
    </div>);
  }
}
 
export default App;