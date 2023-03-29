document.addEventListener('DOMContentLoaded', _ => {
  const obflink = document.querySelectorAll('span[data-obflink]')
  obflink.forEach(function (link) {
    link.addEventListener('click', (event) => {
      const encoded_link = link.dataset.obflink
      if (event.ctrlKey) {
        const newWindow = window.open(decodeURIComponent(escape(window.atob(encoded_link))), '_blank')
        newWindow.focus()
      } else {
        document.location.href = decodeURIComponent(escape(window.atob(encoded_link)))
      }
    })
  })
})