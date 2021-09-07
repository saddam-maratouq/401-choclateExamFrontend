import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';

import axios from 'axios' 

import FavCard from "./FavCard" 

import ChocoForm from './ChocoForm'
  

class MyFavorites extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {

      choclates : []  , 

       Selected : {} , 

       showForm : false , 
    }
  }
  
  

  componentDidMount = async () =>  {

    let  FavUrl =  await   axios.get(`${process.env.REACT_APP_SERVER}/getFavchoclate`)  

    this.setState({

        choclate: FavUrl.data 

    })       
    

  }
 

     DeletChoco =  async (index) => {

        let id = this.state.choclate[index]._id 

        let DeletUrl = axios.delete(`${process.env.REACT_APP_SERVER}/DeletChoco/${id}`) 

        this.setState({

          choclate: DeletUrl.data  
        })
     } 
  


     ////////////////////////////////////////////////  


      ubdateChoco = (id) => {

        let chosen  = this.state.choclates.find ( choco => {
            
             if   (choco._id === id )  
             
             
             this.setState({

              Selected: chosen  


             }) 

            
        })
  
      }  


      ubdateChocoData = async  (e) => {

        e.preventDefault()  

        let obj = {

          title : e.target.title.value ,

          imageUrl : e.target.imageUrl.value
        }

          let id = this.state.Selected._id
       
       
          let UpdateUrl =  await axios.put(`${process.env.REACT_APP_SERVER}/UbdateChoco/${id}`,obj)
         
          this.setState({

            choclates: UpdateUrl.data  ,

            showForm : true

          })
      }   



           

     /////////////////////////////////////////////
    

    render() {
      return (
        <div>
           
            <h2> collection data    </h2>  


                <ChocoForm

                  chosen={this.state.Selected} 

                ubdateChocoData={this.ubdateChocoData}  


                />




            {this.state.choclate.map( kinder , index  =>  {

                return (

                  <FavCard 
                  
                     kinder={kinder} 
                      index={index}  

                      DeletChoco={this.DeletChoco} 
                      
                      ubdateChoco={this.ubdateChoco}
                  />  


                  
      
                
                  
                )
            
            } )
          }

        </div>
      )
    }
  
}

  

export default withAuth0(MyFavorites);



