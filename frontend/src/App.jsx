import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component{
    constructor(){
        super()
        this.state={
            fullname:''
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    changeFullName(event){
        this.setState({
            fullname:event.target.value
        })
    }


    onSubmit(event){
        event.preventDefault()


        const registered={
            fullname: this.state.fullname
    
        }

        axios.post('http://localhost:4000/app/signup', registered)
        .then(res=> console.log(res.data))


        this.setState({
            fullname:''
        })
    }



    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type= 'text'
                                placeholder= "Employee Full Name"
                                onChange={this.changeFullName}
                                value={this.state.fullnmae}
                                className='formcontrol  form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' vaalue='Submit' />
                        </form>
                    </div>

                </div>
            </div>
         );
    }
}

export default App
