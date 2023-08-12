function getInputValue() {
  const maSV = document.querySelector("#txtMaSV").value;
  const tenSV = document.querySelector("#txtTenSV").value;
  const email = document.querySelector("#txtEmail").value;
  const password = document.querySelector("#txtPass").value;
  const toan = document.querySelector("#txtDiemToan").value;
  const ly = document.querySelector("#txtDiemLy").value;
  const hoa = document.querySelector("#txtDiemHoa").value;

  return { maSV, tenSV, email, password, toan, ly, hoa };
}

function resetInput() {
  document.querySelector("#txtMaSV").value = "";
  document.querySelector("#txtTenSV").value = "";
  document.querySelector("#txtEmail").value = "";
  document.querySelector("#txtPass").value = "";
  document.querySelector("#txtDiemToan").value = "";
  document.querySelector("#txtDiemLy").value = "";
  document.querySelector("#txtDiemHoa").value = "";

  document.querySelector("#themSv").disabled = false;
  document.querySelector("#txtMaSV").disabled = false;

  document.querySelector("#updateSv").disabled = true;
}

function fillInput(maSV, tenSV, email, password, toan, ly, hoa) {
  document.querySelector("#txtMaSV").value = maSV;
  document.querySelector("#txtTenSV").value = tenSV;
  document.querySelector("#txtEmail").value = email;
  document.querySelector("#txtPass").value = password;
  document.querySelector("#txtDiemToan").value = toan;
  document.querySelector("#txtDiemLy").value = ly;
  document.querySelector("#txtDiemHoa").value = hoa;
}

function renderSV(sinhViens) {
  if (sinhViens?.length === 0) {
    document.querySelector("#tbodySinhVien").innerHTML = `
        <tr>
        <td colspan= "5" class="text-center">
        Không có dữ liệu
        </td>

    </tr>
        `;
    return;
  }
  let innerHTML = "";
  sinhViens.map((sinhVien, index) => {
    innerHTML += `
            <tr>
                <td>${sinhVien.maSV}</td>
                <td>${sinhVien.tenSV}</td>
                <td>${sinhVien.email}</td>
                <td>${sinhVien.trungBinh()}</td>
                <td>
                    <button class="btn btn-warning text-white" onclick= "handleEditBtnClick('${
                      sinhVien.maSV
                    }')">Edit</button>
                    <button class= " btn btn-danger" onclick="deleteSV('${
                      sinhVien.maSV
                    }')">Delete</button>
                </td>

            </tr>
        `;
  });

  document.querySelector("#tbodySinhVien").innerHTML = innerHTML;
}

function search() {
  const key = document
    .querySelector("#txtSearch")
    .value.replaceAll(" ", "")
    .toUpperCase();
  let arraySearch = sinhViens.filter((sv) => {
    return sv.tenSV.replaceAll(" ", "").toUpperCase().includes(key);
  });

  if (!arraySearch.length) {
    document.querySelector("#tbodySinhVien").innerHTML = `
        <tr>
        <td colspan= "5" class="text-center">
        Không tìm thấy kết quả phù hợp
        </td>

    </tr>
        `;
    return;
  }
  renderSV(arraySearch);
}

function handleEditBtnClick(id) {
  const { maSV, tenSV, email, password, toan, ly, hoa } = sinhViens.find(
    (sv) => sv.maSV === id
  );
  fillInput(maSV, tenSV, email, password, toan, ly, hoa);
  document.querySelector("#txtMaSV").disabled = true;
  document.querySelector("#themSv").disabled = true;

  document.querySelector("#updateSv").disabled = false;
}

function show() {
  document.querySelector(".fa-eye-slash").classList.remove("d-none");
  document.querySelector(".fa-eye").classList.add("d-none");

  document.querySelector("#txtPass").type = "text";
}

function hide() {
  document.querySelector(".fa-eye-slash").classList.add("d-none");
  document.querySelector(".fa-eye").classList.remove("d-none");

  document.querySelector("#txtPass").type = "password";
}

getAllSV();
