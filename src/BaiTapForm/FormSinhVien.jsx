import React, { Component } from "react";
import { connect } from "react-redux";
class FormSinhVien extends Component {
  state = {
    value: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    valid: false,
  };

  handleChange = (e) => {
    // lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let { value, name, type, pattern } = e.target;
    // setState lại giá trị mới cho state
    // this.setState({
    //   [name]: value,
    // });
    let errorMessage = "";
    if (value.trim() === "") {
      // kiểm tra bất kì control input nào người dùng nhập vào đều kiểm tra rỗng
      errorMessage = name + " không được bỏ trống";
    }
    // Kiểm tra email
    if (type === "email" || type === "number") {
      const regexEmail = new RegExp(pattern);
      if (!regexEmail.test(value)) {
        errorMessage = name + " không đúng định dạng";
      }
    }
    let values = { ...this.state.value, [name]: value }; // cập nhật giá trị values cho state
    let errors = { ...this.state.errors, [name]: errorMessage }; // cập nhật lỗi cho state

    this.setState(
      {
        ...this.state,
        value: values,
        errors: errors,
      },
      () => {
        this.checkValid();
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault(); //cản sự kiện reload trang của browser
    this.props.themSinhVien(this.state.value);
  };

  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.value[key] === "") {
        valid = false;
      }
    }

    this.setState({
      ...this.state,
      valid: valid,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className="card-header bg-dark text-white">
            <h3>Thông tin sinh viên</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <p>Mã sinh viên</p>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.value.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <p>Họ tên</p>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.value.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
                <div className="form-group col-6">
                  <p>Số điện thoại</p>
                  <input
                    type="number"
                    // regex kiểm tra number là: /^[0-9]+$/
                    pattern="^[0-9]+$"
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.value.soDienThoai}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group col-6">
                  <p>Email</p>
                  <input
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}"
                    type="email"
                    className="form-control"
                    name="email"
                    value={this.state.value.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {this.state.valid ? (
                    <button className="btn btn-success">Thêm sinh viên</button>
                  ) : (
                    <button className="btn btn-success" disabled>
                      Thêm sinh viên
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      // Tạo ra action
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      // Dùng hàm dispatch mà redux cung cấp đưa action lên reducer
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
