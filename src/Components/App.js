import './../App.css';
import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';
const { v4: uuidv4 } = require('uuid');

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      dataUser : [],
      searchText : '',
      editUserStatus : false,
      userEditObject : {}
    }
  }

  
  componentWillMount() {
    if(localStorage.getItem('userData')===null){
      localStorage.setItem('userData',JSON.stringify(DataUser));
    }
    else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        dataUser:temp
      })
    }
  }
  
  //delete
  deleteUser = (idUser)=>{
    var tempData = this.state.dataUser.filter(item => item.id !== idUser)
    this.setState({
      dataUser : tempData
    })
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  //edit
  getEditUserInfoApp =(info)=>{
    this.state.dataUser.forEach((value,key) => {
     if(value.id === info.id){
       value.name = info.name;
       value.tel = info.tel;
       value.permission = info.permission;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.dataUser));
  }

  changeEditUserStatus = ()=>{
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }
  //add
  getNewUserData = (name, tel, permission)=>{
    var item = {};
    item.id = uuidv4();
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    //console.log(item);

    var items = this.state.dataUser;
    items.push(item);
    this.setState({
      dataUser: items
    })
    //console.log(items);
    localStorage.setItem('userData',JSON.stringify(items));
  }

  editUser = (user)=>{
    console.log(user);
    this.setState({
      userEditObject : user
    })
  }

  getTextSearch = (dl)=>{
    this.setState({
      searchText : dl
    })
  }
  
  render() {
    //localStorage.setItem('userData', JSON.stringify(DataUser));

    var result = [];
    this.state.dataUser.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item);
      }
    })
    //console.log(result);
    
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search 
                getEditUserInfoApp = {(info)=> this.getEditUserInfoApp(info)}
                userEditObject = {this.state.userEditObject}
                getTextSearchProps = {(dl)=> this.getTextSearch(dl)}
                editUserStatus = {this.state.editUserStatus}
                changeEditUserStatus = {()=> this.changeEditUserStatus()}
              />
              <hr/>
              <TableData 
                deleteUser = {(idUser)=> this.deleteUser(idUser)}
                editFun={(user) =>this.editUser(user)} dataUserProps={result}
                changeEditUserStatus = {()=> this.changeEditUserStatus()}
              />
              <AddUser add={(name, tel, permission)=> this.getNewUserData(name, tel, permission)}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;

