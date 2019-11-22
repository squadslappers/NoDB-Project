import React, {Component} from 'react';

class Goal extends Component {
    constructor(props){
        super(props)
        this.state={
            showEdit: false,
            edits: ''
        }
        this.toggleEdit=this.toggleEdit.bind(this)
        this.handleInput=this.handleInput.bind(this)
        this.confirmButton=this.confirmButton.bind(this)
    }

    toggleEdit(){
        this.setState({
            showEdit: !this.state.showEdit
        })
    }

    handleInput(value){
        this.setState({
            edits: value
        })
        console.log(this.state.edits)

    }

    confirmButton(){
        this.props.editFn(this.props.id, {newDate: this.state.edits || this.props.date})
        this.toggleEdit()
    }

    render(){
        return(
            <section id='goal-box'>
                <div id='goal-part'>
                    <span id='goal-name'>{this.props.progress}</span>
                    {this.state.showEdit ? 
                        <div id='edit'>
                            <input 
                                id='edit-input'
                                placeholder='edit the date'
                                onChange={(e) => this.handleInput(e.target.value)}
                                autocomplete = 'off'/>
                            <button 
                                className='tricky-button'
                                onClick={this.confirmButton}>confirm</button>
                        </div>
                        : <span>{this.props.date}</span>}
                </div>    
                <div id='edit-delete'>
                    <button 
                        className='tricky-button'
                        onClick={this.toggleEdit}>
                            {this.state.showEdit ?
                                'sike'
                                :
                                'edit'}
                        </button>
                        
                    <button 
                        className='tricky-button' 
                        onClick={() => this.props.deleteFn(this.props.id)}>
                        delete</button>
                </div>
                
                {/* <div id='problem-part'>
                    {this.props.problem}
                </div> */}
                
            </section>
        )
    }
}

export default Goal