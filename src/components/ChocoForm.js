import React, { Component } from 'react' 



 class ChocoForm extends Component {
    render() {
        return (
            <div>
                
                <form   onSubmit={this.props.ubdateChocoData}    >  
            <label  >       </label>

          <input type="text"  name="title"   defaultValue={this.props.chosen.title} />

          <label >      </label>

          <input type="text"    name="imageUrl"  defaultValue={this.props.chosen.imageUrl}  /> 

          <input type="submit" value=" Update " />
        </form>
            </div>
        )
    }
}

export default ChocoForm;
