// تحذير أولي

// حفظ البيانات في localStorage مؤقتًا
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key));
}

// نسخ النص
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("✅ تم النسخ بنجاح: " + text);
    });
}

// معاينة الصورة قبل الرفع
function previewImage(input, previewId) {
    if(input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(previewId).src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}