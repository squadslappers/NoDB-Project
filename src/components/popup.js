import React, {Component} from 'react';
import axios from 'axios';

class Popup extends Component {
    constructor (props) {
        super (props);
        this.state = {
            progress: '',
            date: '',
            problem: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    // ======== CHANGES STATE TO BE INPUT VALUES ========

    handleChange(e){
        let {value,name} = e.target;

        this.setState({
            [name]:value
        })

        console.log(this.state)
    }
    
    handleSubmit(){

        axios.post('/api/goals', this.state).then(res => {
            this.setState({
                goals: res.data
            })
        })
        this.props.togglePopup()
        this.props.refreshFn()
    }

    // catchPokemon(body){
    //     axios.post('/api/pokemon', body).then(res => {
    //       this.setState({
    //         pokemonCaught: res.data
    //       })
    //     })
    //   }


    // when you do onClick, make an arrow function that fires handleSubmit (this.state.whatever) THAT is how you define what req.body is.

    render(){
        return(
            <div id="popup">
                <div id="inner-popup">
                    <button 
                        id="closePopup" 
                        onClick={this.props.togglePopup}>
                        ×</button>

                    <span>what <span id="input-progress">progress</span> do you want to make?</span>
                    <input 
                        name='progress' 
                        className="popup-input" 
                        onChange={this.handleChange}
                        autocomplete="off"/>

                    <span>by when?</span>
                    <input 
                        name='date'
                        className="popup-input"
                        onChange={this.handleChange}
                        autocomplete="off"/>

                    <span>what <span id="input-problem">problem</span> are you working to solve?</span>
                    <input 
                        name = 'problem' 
                        className="popup-input" 
                        onChange={this.handleChange}
                        autocomplete = 'off'/>

                    <button id='submit-progression' onClick={this.handleSubmit}>create new progression</button>
                </div>
            </div>
        )
    }
}

export default Popup