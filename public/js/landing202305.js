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

const closePopUpSmallCode = document.querySelector('.closePopUpSmallCode');
if (closePopUpSmallCode) {
  closePopUpSmallCode.onclick = () => {
    window.dialogSmallCode.close();
  };
}

window.dialogSmallCode.showModal();

function myCopy(el) {
  el.select();
  el.setSelectionRange(0, 99999); // For mobile devices
  navigator.clipboard.writeText(el.value);
  alert('Bạn đã copy code: ' + el.value);
}

const giftCode = document.querySelector('#giftCode');
if (giftCode) {
  giftCode.onclick = () => {
    myCopy(giftCode);
  };
}


const dialogRule_Popup = document.querySelector('.dialogRule_Popup');
if (dialogRule_Popup) {
  dialogRule_Popup.onclick = () => {
    window.dialogRule.showModal();
  };
}
const closeDialogRule = document.querySelector('.closeDialogRule');
if (closeDialogRule) {
  closeDialogRule.onclick = () => {
    window.dialogRule.close();
  };
}

const dialogGetGift_Popup = document.querySelector('.dialogGetGift_Popup');
if (dialogGetGift_Popup) {
  dialogGetGift_Popup.onclick = () => {
    window.dialogGetGift.showModal();
  };
}
const closeDialogGetGift = document.querySelector('.closeDialogGetGift');
if (closeDialogGetGift) {
  closeDialogGetGift.onclick = () => {
    window.dialogGetGift.close();
  };
}

const dialogHistory_Popup = document.querySelector('.dialogHistory_Popup');
if (dialogHistory_Popup) {
  dialogHistory_Popup.onclick = () => {
    window.dialogHistory.showModal();
  };
}
const closeDialogHistory = document.querySelector('.closeDialogHistory');
if (closeDialogHistory) {
  closeDialogHistory.onclick = () => {
    window.dialogHistory.close();
  };
}