(() => {
  const refs = {
    openRoomBtn: document.querySelector("[data-room-open]"),
    closeRoomBtn: document.querySelector("[data-room-close]"),
    room: document.querySelector("[data-room]"),
  };

  refs.openRoomBtn.addEventListener("click", toggleRoom);
  refs.closeRoomBtn.addEventListener("click", toggleRoom);

  function toggleRoom() {
    refs.room.classList.toggle("is-hidden");
  }
})();
