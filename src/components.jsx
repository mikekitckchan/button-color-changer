import React, {Component} from 'react';

class ColorChanger extends Component{
	state={
		buttonStyle: {buttonType: "btn btn-primary", buttonText: "Blue", stateNo: 0},
		
	}

	buttonAction = () =>{
		if (this.state.buttonStyle.stateNo === 0){
		this.setState(
			{
				buttonStyle: {buttonType: "btn btn-danger", buttonText: "Red", stateNo: 1},
			}
			)

		};

		if (this.state.buttonStyle.stateNo === 1) {
			this.setState(
				{
					buttonStyle: {buttonType: "btn btn-primary", buttonText: "Blue", stateNo: 0},
				}
			)
		};
		
	};

	render(){
		return(
			<div className="myButton">
				<button onClick={this.buttonAction} className={this.state.buttonStyle.buttonType}>{this.state.buttonStyle.buttonText}</button>
			</div>
			)
	}
}

export default ColorChanger;