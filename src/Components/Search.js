import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempValue: ''
    }
  }

  getEditUserInfo = (info)=>{
    this.setState({
      userObj : info
    })
    this.props.getEditUserInfoApp(info);
  }

  isShowEditForm = ()=>{
    if(this.props.editUserStatus === true){
      return <EditUser 
      getEditUserInfo ={(info)=>this.getEditUserInfo(info)}
      userEditObject = {this.props.userEditObject}
      changeEditUserStatus = {()=> this.props.changeEditUserStatus()}/>
    }
  }

  isChange = (event) => {
    console.log(event.target.value);
    this.setState({
      tempValue: event.target.value
    })
    this.props.getTextSearchProps(this.state.tempValue);
  }
  render() {
    return (
      <div className="col-12">
        {this.isShowEditForm()}
        <form className="form-inline my-2 my-lg-0 pb-3">
          <input className="form-control mr-sm-2" type="search" placeholder="Nhập từ khóa" aria-label="Search"
            onChange={(event) => this.isChange(event)} />
          <div className="btn btn-info" onClick={(dl) => this.props.getTextSearchProps(this.state.tempValue)}>Tìm kiếm</div>
        </form>
      </div>
    );
  }
}

export default Search;
