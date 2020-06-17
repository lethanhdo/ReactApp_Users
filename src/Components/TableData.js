import React, { Component } from 'react';
import TableDataRow from './TableDataRow';

class TableData extends Component {
  
  deleteClick = (idUser)=>{
    this.props.deleteUser(idUser)
  }

  mappingDataUser = ()=>
    this.props.dataUserProps.map((value,key) =>(

      
      <TableDataRow 
        changeEditUserStatus = {()=> this.props.changeEditUserStatus()}
        deleteClick = {(idUser)=> this.deleteClick(idUser)}
        editFunClick={(user)=>this.props.editFun(value)} 
        userName={value.name} 
        key={key} 
        stt={key} 
        tel={value.tel}
        permission={value.permission}
        id={value.id}
      />
    ))
  
    render() {
      
        return (
            <div className="col-9">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Họ và tên</th>
                  <th>Điện thoại</th>
                  <th>Phân quyền</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                
                {this.mappingDataUser()}
              </tbody>
            </table>
          </div>
          
        );
    }
}

export default TableData;
