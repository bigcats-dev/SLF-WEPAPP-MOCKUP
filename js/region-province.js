const REGION_PROVINCES = {
  north: ['เชียงใหม่','เชียงราย','ลำพูน','ลำปาง','แพร่','น่าน','พะเยา','แม่ฮ่องสอน'],
  central: ['กรุงเทพมหานคร','นนทบุรี','ปทุมธานี','สมุทรปราการ','อยุธยา'],
  northeast: ['ขอนแก่น','อุดรธานี','นครราชสีมา','บุรีรัมย์','อุบลราชธานี'],
  south: ['ภูเก็ต','กระบี่','พังงา','ตรัง','สงขลา','สุราษฎร์ธานี']
}

function initRegionProvinceFilter() {
  const regionEl = document.getElementById('regionSelect')
  const provinceEl = document.getElementById('provinceSelect')
  const selectedBox = document.getElementById('selectedProvinces')

  if (!regionEl || !provinceEl || !selectedBox) return
   provinceEl.addEventListener('mousedown', (e) => {
    e.preventDefault()
    const opt = e.target
    if (opt.tagName !== 'OPTION') return

    opt.selected = !opt.selected
    provinceEl.dispatchEvent(new Event('change'))
  })

  regionEl.addEventListener('change', () => {
    provinceEl.innerHTML = ''
    selectedBox.innerHTML = ''

    const region = regionEl.value
    if (!REGION_PROVINCES[region]) return

    REGION_PROVINCES[region].forEach(p => {
      const opt = document.createElement('option')
      opt.value = p
      opt.textContent = p
      provinceEl.appendChild(opt)
    })
  })

  provinceEl.addEventListener('change', () => {
    selectedBox.innerHTML = ''
    const selected = Array.from(provinceEl.selectedOptions).map(o => o.value)

    selected.forEach(p => {
      const badge = document.createElement('span')
      badge.className = 'badge bg-primary d-flex align-items-center'
      badge.innerHTML = `
        ${p}
        <button type="button"
          class="btn-close btn-close-white ms-2"
          style="font-size: 0.6rem"
          aria-label="Remove"></button>
      `

      badge.querySelector('button').addEventListener('click', () => {
        Array.from(provinceEl.options).forEach(opt => {
          if (opt.value === p) opt.selected = false
        })
        badge.remove()
      })

      selectedBox.appendChild(badge)
    })
  })
  
}

document.addEventListener('DOMContentLoaded', initRegionProvinceFilter)
