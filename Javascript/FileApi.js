document.getElementById('fileAPI').addEventListener('change', function () {
    var file = this.files.item(0),
        reader = new FileReader();

// Android 4.3 not supporting addEventListener + load, loadend etc. events
    reader.onload = function () {
        document.getElementById('photo').src = reader.result;
    };

    reader.readAsDataURL(file);
});