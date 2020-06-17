import React, { Component } from 'react';

class EditUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id : this.props.userEditObject.id,
            name : this.props.userEditObject.name,
            tel : this.props.userEditObject.tel,
            permission : this.props.userEditObject.permission
        }
    }
    

    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }

    saveButton = ()=>{
        var info ={};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getEditUserInfo(info);
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="row">
          <div className="col">
          <div className="card border-primary bg-warning mb-3 mt-3">
            <div className="card-header text-center">Sửa thông tin user</div>
            <div className="card-body text-primary">
              <form>
                <div className="form-group">
                  <input type="text" defaultValue={this.props.userEditObject.name} onChange={(event)=> this.isChange(event)} name="name" className="form-control" placeholder="Nhập họ và tên" />
                </div>
                <div className="form-group">
                  <input type="text" defaultValue={this.props.userEditObject.tel} onChange={(event)=> this.isChange(event)} name="tel" className="form-control" placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group">
                  <div className="mb-3">
                    <select defaultValue={this.props.userEditObject.permission} onChange={(event)=> this.isChange(event)} className="custom-select" name="permission" required>
                      <option value>Phân quyền</option>
                      <option value={"1"}>Admin</option>
                      <option value={"2"}>Modrater</option>
                      <option value={"3"}>Normal</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <input type="button" className="btn btn-block btn-primary" onClick={()=> this.saveButton()} value="Lưu" />
                </div>
              </form>
            </div>
          </div>
          </div>
          
        </div>
        );
    }
}

export default EditUser;
