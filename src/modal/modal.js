import React from 'react';
import './modal.scss';

export default class Modal extends React.Component {
    
    state = {
        isOpen: false
    }
    

    render() {
        return (
            <React.Fragment>
                <button onClick={()=> this.setState({isOpen: true})}>Open modal</button>
            
                {this.state.isOpen && (
            
                <div className='modal'>
                        <div className="modal-body">
                            <h1 className="modal__title"> Modal title</h1>
                            <p className="modal__p">I am awesome modal!</p>
                            <button className="modal__close" onClick={()=> this.setState({isOpen: false})}>Close modal</button>
                        </div>
                    </div>
            
            )}
            
            </React.Fragment>
        )
    }
}
