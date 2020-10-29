import React from 'react'
// import '../../styles/Login.css'
import { Link, Redirect } from 'react-router-dom'
import { requestLogin } from './api'
import Cookie from 'js-cookie';

class Error extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'kingman',
            password: '123123'
        }
        this.login = this.login.bind(this);
    }


    async login() {
        try {
            const res = await requestLogin({
              USERNAME: this.state.username,
              PASS: this.state.password
            })
            console.log(res);
            Cookie.set('SESSION_ID', res.data.TOKEN)
            window.location.href = '/home'
        } catch (err) {
            console.log(err);
        }
    }

    handleTextChange(field, event) {
        this.setState({
            [field]: event.target.value
        })
    }

    render() {
        const { username, password } = this.state;
        const token = Cookie.get("SESSION_ID");
        // if (token) {
        //     return <Redirect to='/' />
        // }
        return (
            <><p>Loi roi, dang nhap lai di</p></>
        )
    }
}
export default Error