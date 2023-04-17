(function () {

    'use strict';

    const start_btn = document.getElementById('start_btn');

    start_btn.addEventListener('click', function (event) {
        event.preventDefault();
        open_popup();
    });

    function open_popup() {
        popup.classList.add("op_popup");
    }    
    

})();