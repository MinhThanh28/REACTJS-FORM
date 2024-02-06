const stateDefault = {
  mangSinhVien: [
    {
      maSV: 1,
      hoTen: "Nguyen Van A",
      soDienThoai: "09032323",
      email: "abc@gmail.com",
    },
  ],
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      // Thêm sinh viên vào mảng sinh viên
      state.mangSinhVien = [...state.mangSinhVien, action.sinhVien];
      return { ...state };
    }
    case "DELETE_SINH_VIEN": {
      // Xử lý xóa sinh viên
      state.mangSinhVien = state.mangSinhVien.filter(
        (sinhVien) => sinhVien.maSV !== action.maSV
      );
      return { ...state };
    }
    
    default: {
      return { ...state };
    }
  }
};
