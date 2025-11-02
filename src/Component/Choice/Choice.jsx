import { Component } from "react";
import { ChoiceStyled } from "./Choice.styled";

class Choice extends Component {
    state = {
        chosen: null
    };

    render() {
    console.log(this.props.Chosen);  
        return (<div>
            <h1>Chosen</h1>
            <ChoiceStyled>
                <img src={this.props.Chosen} alt="" />
           </ChoiceStyled>
  </div>
        );
    }   
}

export default Choice;