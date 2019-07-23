import React from 'react'

state = {
    email : '',
    password : ''
}

const login = () => {
    return (
        <>
            <form onSubmit = {this.onSubmit} style = {{display : 'flex' }}>
                <div className="AddTodo">
                <input 
                    type='email' 
                    name ='email'
                    style= {{ flex: '10', padding: '5px' }}
                    placeholder = 'Enter Email ..'
                    value = {this.state.email}
                />
                <input 
                    type='text' 
                    name ='password'
                    style= {{ flex: '10', padding: '5px' }}
                    placeholder = 'Enter password ..'
                    value = {this.state.password}
                />
                <input
                    type='Submit'
                    value='Submit'
                    className='btn'
                    style={{flex: 1}}
                />
                </div>
            </form>
        </>
    )
}

export default login;
