import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react'; 
 import axios from 'axios'

 import CohocoCard from './CohocoCard'

class AllDataAPI extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
            choclate : [] 
        }
    }
    


 componentDidMount = async () =>  {

    let  ApiUrl =  await   axios.get(`${process.env.REACT_APP_SERVER}/getchoclate`)  

    this.setState({

        choclate: ApiUrl.data 

    })      


 }

 addChoco = (choco) => {

    const { user, isAuthenticated } = this.props.auth0;

     let obj = {
 
         email :user.email ,

         title : choco.title , 

         imageUrl : choco.imageUrl  


         
         
        }
         
        let AddChoco = (`${process.env.REACT_APP_SERVER}/Addchoclate`)  

            axios.post( AddChoco,obj ) 

 }

   






    render() {
        return (
            <div>
                <h1>All Data from the API</h1>
                <h3>Select your favorites :)</h3> 

                 
                    {this.state.choclate.map ( choco   =>   {

                        return (

                            <CohocoCard
                            
                            choco={choco}  

                            addChoco ={this.addChoco}
                            
                            />

                        )

                    } ) }

            </div>
        )
    }
}

export default withAuth0(AllDataAPI);
