import React, { Component } from "react";
import { connect } from "react-redux";
class TableSinhVien extends Component {
  renderSinhVien = () => {
    const { mangSinhVien } = this.props;
    return mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                const action = {
                  type: "DELETE_SINH_VIEN",
                  maSV: sinhVien.maSV,
                };
                this.props.dispatch(action);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    console.log(this.props.mangSinhVien);
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Mã sinh viên</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLySinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps)(TableSinhVien);
