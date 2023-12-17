window.unloadSummernote = () => {
    if ($('#summernote').length) {
        $('#summernote').summernote('destory');
        $('.note-editor').remove();
    }
}
