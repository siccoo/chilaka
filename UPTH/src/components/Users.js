// import React, { Component } from 'react';
// import User from './User';

// class Users extends Component {
//     state = {
//         users: [
//             {name:'John', age:20},
//             {name:'Okoboshi', age:30},
//             {name:'Christian', age:40},
//             {name:'Chilaka', age:50},
//         ],
//         title: 'Users List',
//     };

//     makeMeYounger = () => {
//         const newState = this.state.users.map((user)=>{
//             const tempUser = user;
//             tempUser.age -=10;
//             return tempUser;
//         });
//         this.setState({
//             newState
//         });
//         // this.setState({
//         //     users: [
//         //         {name:'John', age:10},
//         //         {name:'Okoboshi', age:20},
//         //         {name:'Christian', age:30},
//         //         {name:'Chilaka', age:40},
//         //     ],
//         // })
//         // console.log('clicked')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.makeMeYounger}>Make me 10 years younger</button>
//                 <br/>
//                 <h1>{this.state.title}</h1>
            
//             {
//                 this.state.users.map((user)=>{
//                     return <User age={user.age}>{user.name}</User> 
//                 })
//             }

//                 {/* Another method 1
//                 <User age={this.state.users[0].age}>{this.state.users[0].name}</User>
//                 <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
//                 <User age={this.state.users[2].age}>{this.state.users[2].name}</User>
//                 <User age={this.state.users[3].age}>{this.state.users[3].name}</User> */}
//             </div>
//         );
//     }
// }

// export default Users;