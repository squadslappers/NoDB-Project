import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import Popup from './components/popup';
import Category from './components/category';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            listedGoals: [],
            showPopup: false
        }
        this.togglePopup=this.togglePopup.bind(this);
        this.componentDidMount=this.componentDidMount.bind(this);
        this.delete=this.delete.bind(this);
        this.edit=this.edit.bind(this);
    }

    togglePopup(){
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    componentDidMount(){
        axios.get('/api/goals').then(res => {
            console.log('goals = loaded')
            this.setState({
                listedGoals: res.data
            })
        })
    }

    // ======== EDIT ========

    edit(id, body){
        axios.put(`api/goals/${id}`, body).then(res=>{
            this.setState({goals: res.data})
        })
        this.componentDidMount();
    }

    // ======== EDIT ========

    delete(id){
        axios.delete(`api/goals/${id}`).then(res => {
            this.setState({goals: res.data});
        })
        this.componentDidMount()
    }

    render(){
        return(
            <div className = "App">
                {this.state.showPopup ?
                    <Popup
                        togglePopup={this.togglePopup}
                        refreshFn={this.componentDidMount} />
                    : null}
                <Header
                    togglePopup={this.togglePopup} />
                <Category
                    listedGoals={this.state.listedGoals}
                    deleteFn = {this.delete}
                    editFn = {this.edit}/>
            </div>
        )
    }
}

export default App;
