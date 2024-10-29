// JavaScript cho sidebar
let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function () {
    sidebar.classList.toggle("active");
};
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
};

// Dữ liệu mẫu cho ca làm
let shifts = [
    {
        id: 'CA001',
        name: 'Ca sáng',
        employeeId: 'NV001',
        employeeName: 'Nguyễn Văn A',
        date: '2024-01-15'
    },
    {
        id: 'CA002',
        name: 'Ca chiều',
        employeeId: 'NV002',
        employeeName: 'Trần Thị B',
        date: '2024-01-15'
    }
];

// Hiển thị danh sách ca làm
function displayShifts(shiftsToDisplay = shifts) {
    const tableBody = document.getElementById('shiftTableBody');
    tableBody.innerHTML = '';

    shiftsToDisplay.forEach(shift => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${shift.id}</td>
            <td>${shift.name}</td>
            <td>${shift.employeeId}</td>
            <td>${shift.employeeName}</td>
            <td>${shift.date}</td>
            <td class="action-buttons">
                <button class="btn btn-edit" onclick="loadShiftForEdit('${shift.id}')">Sửa</button>
                <button class="btn btn-delete" onclick="deleteShiftById('${shift.id}')">Xóa</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Lưu ca làm
function saveShift() {
    const shiftId = document.getElementById('shiftId').value;
    const shiftName = document.getElementById('shiftName').value;
    const employeeId = document.getElementById('employeeId').value;
    const employeeName = document.getElementById('employeeName').value;
    const workDate = document.getElementById('workDate').value;

    if (!shiftId || !shiftName || !employeeId || !employeeName || !workDate) {
        alert('Vui lòng điền đầy đủ thông tin!');
        return;
    }

    const newShift = {
        id: shiftId,
        name: shiftName,
        employeeId: employeeId,
        employeeName: employeeName,
        date: workDate
    };

    const existingIndex = shifts.findIndex(shift => shift.id === shiftId);
    if (existingIndex !== -1) {
        shifts[existingIndex] = newShift;
    } else {
        shifts.push(newShift);
    }

    displayShifts();
    clearForm();
}

// Xóa ca làm
function deleteShiftById(id) {
    if (confirm('Bạn có chắc muốn xóa ca làm này?')) {
        shifts = shifts.filter(shift => shift.id !== id);
        displayShifts();
    }
}

// Load thông tin để sửa
function loadShiftForEdit(id) {
    const shift = shifts.find(shift => shift.id === id);
    if (shift) {
        document.getElementById('shiftId').value = shift.id;
        document.getElementById('shiftName').value = shift.name;
        document.getElementById('employeeId').value = shift.employeeId;
        document.getElementById('employeeName').value = shift.employeeName;
        document.getElementById('workDate').value = shift.date;
    }
}

// Xóa form
function clearForm() {
    document.getElementById('shiftId').value = '';
    document.getElementById('shiftName').value = '';
    document.getElementById('employeeId').value = '';
    document.getElementById('employeeName').value = '';
    document.getElementById('workDate').value = '';
}

// Lọc ca làm
function filterShifts() {
    const monthFilter = document.getElementById('monthFilter').value;
    const shiftFilter = document.getElementById('shiftFilter').value;

    let filteredShifts = [...shifts];

    if (monthFilter) {
        filteredShifts = filteredShifts.filter(shift => {
            const shiftMonth = new Date(shift.date).getMonth() + 1;
            return shiftMonth === parseInt(monthFilter);
        });
    }

    if (shiftFilter) {
        filteredShifts = filteredShifts.filter(shift => 
            shift.name === shiftFilter
        );
    }

    displayShifts(filteredShifts);
}

// Khởi tạo hiển thị ban đầu
document.addEventListener('DOMContentLoaded', function() {
    displayShifts();
});
// Script cho quản lý nhân viên
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('employee_form');
    const table = document.getElementById('employee_table').getElementsByTagName('tbody')[0];
    const editBtn = document.querySelector('.btn_edit');
    const deleteBtn = document.querySelector('.btn_delete');
    let selectedRow = null;

    // Hàm thêm nhân viên mới
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if(selectedRow == null) {
            const row = table.insertRow();
            row.innerHTML = `
                <td>${document.getElementById('manv').value}</td>
                <td>${document.getElementById('hoten').value}</td>
                <td>${document.querySelector('input[name="gioitinh"]:checked').value}</td>
                <td>${document.getElementById('dienthoai').value}</td>
                <td>${document.getElementById('chucvu').value}</td>
                <td>${document.getElementById('ngaysinh').value}</td>
                <td>${document.getElementById('ngayvaolam').value}</td>
                <td>
                    <button class="btn btn_edit" onclick="editRow(this)">Sửa</button>
                    <button class="btn btn_delete" onclick="deleteRow(this)">Xóa</button>
                </td>
            `;
            form.reset();
        }
    });

    // Hàm sửa thông tin nhân viên
    window.editRow = function(button) {
        selectedRow = button.parentElement.parentElement;
        document.getElementById('manv').value = selectedRow.cells[0].innerHTML;
        document.getElementById('hoten').value = selectedRow.cells[1].innerHTML;
        document.querySelector(`input[name="gioitinh"][value="${selectedRow.cells[2].innerHTML}"]`).checked = true;
        document.getElementById('dienthoai').value = selectedRow.cells[3].innerHTML;
        document.getElementById('chucvu').value = selectedRow.cells[4].innerHTML;
        document.getElementById('ngaysinh').value = selectedRow.cells[5].innerHTML;
        document.getElementById('ngayvaolam').value = selectedRow.cells[6].innerHTML;
        editBtn.disabled = false;
        deleteBtn.disabled = false;
    };

    // Hàm xóa nhân viên
    window.deleteRow = function(button) {
        if(confirm('Bạn có chắc muốn xóa nhân viên này?')) {
            const row = button.parentElement.parentElement;
            table.deleteRow(row.rowIndex - 1);
            form.reset();
            selectedRow = null;
            editBtn.disabled = true;
            deleteBtn.disabled = true;
        }
    };
});