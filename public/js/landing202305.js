const popupSmall = document.querySelector('.popupSmall');
if (popupSmall) {
  popupSmall.onclick = () => {
    window.dialogSmall.showModal();
  };
}

const closePopUpSmall = document.querySelector('.closePopUpSmall');
if (closePopUpSmall) {
  closePopUpSmall.onclick = () => {
    window.dialogSmall.close();
  };
}

