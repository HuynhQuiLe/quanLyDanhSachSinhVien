function SinhVien(maSV, tenSV, email, password, toan, ly, hoa) {
  this.maSV = maSV;
  this.tenSV = tenSV;
  this.email = email;
  this.password = password;
  this.toan = toan;
  this.ly = ly;
  this.hoa = hoa;
  this.trungBinh = function () {
    return (this.toan * 1 + this.ly * 1 + this.hoa * 1) / 3;
  };
}
