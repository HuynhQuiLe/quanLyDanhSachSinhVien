let sinhViens = [];
if (JSON.parse(localStorage.getItem("sinhViens"))) {
  sinhViens = JSON.parse(localStorage.getItem("sinhViens"));
}
if (sinhViens.length > 0) {
  sinhViens = sinhViens.map(
    ({ maSV, tenSV, email, password, toan, ly, hoa }) => {
      return new SinhVien(maSV, tenSV, email, password, toan, ly, hoa);
    }
  );
}

// C
const addSV = async () => {
  //   lay thong tin
  const { maSV, tenSV, email, password, toan, ly, hoa } = getInputValue();

  // check validation

  // chap nhan input va them moi sinh vien
  const sinhVien = new SinhVien(maSV, tenSV, email, password, toan, ly, hoa);
  sinhViens.push(sinhVien);
  localStorage.setItem("sinhViens", JSON.stringify(sinhViens));
  resetInput();
  getAllSV();
};

// R
const getAllSV = async () => {
  renderSV(sinhViens);
};

// U
const updateSV = () => {
  const { maSV, tenSV, email, password, toan, ly, hoa } = getInputValue();
  const sinhVien = new SinhVien(maSV, tenSV, email, password, toan, ly, hoa);

  //   tim kiem sinhVien
  const index = sinhViens.findIndex((sinhVien) => {
    return sinhVien.maSV === maSV;
  });
  sinhViens.splice(index, 1, sinhVien);
  localStorage.setItem("sinhViens", JSON.stringify(sinhViens));
  resetInput();
  getAllSV();
};

// D
const deleteSV = (id) => {
  const index = sinhViens.findIndex((sinhVien) => {
    return sinhVien.maSV === id;
  });
  sinhViens.splice(index, 1);
  localStorage.setItem("sinhViens", JSON.stringify(sinhViens));
  getAllSV();
};
