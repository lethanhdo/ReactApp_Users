import React, { Component } from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statusButtonAdd: false,
      id: "",
      name: "",
      tel: "",
      permission: ""
    }
  }

  isChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    //console.log(name);
    //console.log(value);

    this.setState({
      [name]: value
    })
  }

  changeStatus = () => {
    this.setState({
      statusButtonAdd: !this.state.statusButtonAdd
    })
  }

  displayForm = () => {
    if (this.state.statusButtonAdd === true) {
      return (
        <div className="card border-primary mb-3 mt-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Thêm mới User</div>
          <div className="card-body text-primary">
          <form>
            <div className="form-group">
              <input type="text" name="name" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập họ và tên" />
            </div>
            <div className="form-group">
              <input type="text" name="tel" onChange={(event) => this.isChange(event)} className="form-control" placeholder="Nhập số điện thoại" />
            </div>
            <div className="form-group">
              <div className="mb-3">
                <select className="custom-select" name="permission" onChange={(event) => this.isChange(event)} required>
                  <option value>Phân quyền</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Modrater</option>
                  <option value={3}>Normal</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <input type="reset" className="btn btn-block btn-primary" onClick={(name, tel, permission) => this.props.add(this.state.name, this.state.tel, this.state.permission)} value="Thêm mới" />
            </div>
            </form>
          </div>
        </div>
      )
    }
  }
  displayButtonAdd = () => {
    if (this.state.statusButtonAdd === true) {
      return <div className="btn btn-block btn-outline-secondary" onClick={() => this.changeStatus()}>Đóng lại</div>;
    }
    else {
      return <div className="btn btn-block btn-outline-info" onClick={() => this.changeStatus()}>Thêm mới</div>;
    }
  }



  render() {
    //console.log(this.state);
    return (
      <div className="col-3">
        {this.displayButtonAdd()}
        {this.displayForm()}
      </div>

    );
  }
}

export default AddUser;
