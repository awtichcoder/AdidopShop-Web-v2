// luu du lieu khi goi fetch
let addressData = null

//tao cau hinh 3 dropdown  Id TINH / HUYEN /XA
/**
 * @param {string} provinceId
 * @param {string} districtId
 * @param {string} wardId
 */
export async function initAddressSelector(provinceId, districtId, wardId) {
  const provinceSelect = document.getElementById(provinceId)
  const districtSelect = document.getElementById(districtId)
  const wardSelect = document.getElementById(wardId)

  if (!provinceSelect || !districtSelect || !wardSelect) {
    console.error('Không tìm thấy các thẻ select element.')
    return
  }

  try {
    //tai file json
    const response = await fetch('/data/tree.json')
    addressData = await response.json()

    // do du lieu tinh thanh vo
    const provinces = Object.values(addressData)
    // sap xep
    provinces.sort((a, b) => parseInt(a.code) - parseInt(b.code))

    provinces.forEach((province) => {
      const option = document.createElement('option')
      option.value = province.code
      option.text = province.name_with_type
      provinceSelect.appendChild(option)
    })

    // lang nghe sk tinh thanh
    provinceSelect.addEventListener('change', () => {
      resetSelect(districtSelect, '-- Chọn Quận/Huyện --')
      resetSelect(wardSelect, '-- Chọn Phường/Xã --')

      const selectedProvinceCode = provinceSelect.value
      if (!selectedProvinceCode) return

      const districtData = addressData[selectedProvinceCode]?.['quan-huyen']
      if (districtData) {
        const districts = Object.values(districtData)
        districts.forEach((district) => {
          const option = document.createElement('option')
          option.value = district.code
          option.text = district.name_with_type
          districtSelect.appendChild(option)
        })
      }
    })

    //lang nghe sk quan quyen
    districtSelect.addEventListener('change', () => {
      resetSelect(wardSelect, '-- Chọn Phường/Xã --')

      const selectedProvinceCode = provinceSelect.value
      const selectedDistrictCode = districtSelect.value
      if (!selectedProvinceCode || !selectedDistrictCode) return

      const wardData =
        addressData[selectedProvinceCode]?.['quan-huyen']?.[
          selectedDistrictCode
        ]?.['xa-phuong']
      if (wardData) {
        const wards = Object.values(wardData)
        wards.forEach((ward) => {
          const option = document.createElement('option')
          option.value = ward.code
          option.text = ward.name_with_type
          wardSelect.appendChild(option)
        })
      }
    })
  } catch (error) {
    console.error('Lỗi khi tải dữ liệu hành chính:', error)
  }
}

// xoa cac lua chonn cu
function resetSelect(selectElement, defaultText) {
  selectElement.innerHTML = `<option value="">${defaultText}</option>`
}
