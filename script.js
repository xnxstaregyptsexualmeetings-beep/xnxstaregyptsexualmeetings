// تنبيه السرية اول ما الصفحة تفتح
alert("من فضلك... السرية التامة مطلوبة");

// الصفحة الاولى
if (document.getElementById('form1')) {
  document.getElementById('form1').addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'search.html';
  });
}

// الصفحة التانية
if (document.getElementById('form2')) {
  document.getElementById('form2').addEventListener('submit', function(e) {
    e.preventDefault();

    document.querySelector('.container').innerHTML = `
      <div class="msg">
        <h2>طلبك جاهز دلوقتي</h2>
        <p>علشان نكمل لازم تدفع رسوم الطلب وترفع الإيصال</p>

        <div class="account-box">
          <p>رقم حساب ماي كاشي:</p>
          <div class="copy-area">
            <input type="text" value="400963087" id="accountNumber" readonly>
            <button onclick="copyAccount()">نسخ</button>
          </div>
          
          <p class="amount-text">المبلغ ما يعادل بالسوداني 25 آلاف جنيه للطلب الواحد فقط</p>
        </div>

        <input type="file" id="receipt" accept="image/*,.pdf" required style="margin:20px 0">
        <button onclick="processOrder()">ارفع الإيصال</button>

        <div class="warning-text">
          <p>📌 عزي العميل طلبك هيتعالج وهنراجع إيصال الدفع بتاعك...</p>
          <p>⚠️ خلي بالك لو الإيصال مزيف الحساب هيتوقف نهائي من الموقع...</p>
          <p>⏱️ بعد ما ترفع الإيصال استنى 60 ثانية بس هنعاين الطلب، لو الإيصال سليم هتجيلك رسالة بالمكان والزمان وطريقة التواصل...</p>
          <br>
          <p>💬 أنا مجرد وسيط بين الطرفين وباخد مقابل بسيط حسب تطابق البيانات... أنا غير مسؤول عن أي حاجة، ممكن طلبك يطلع حد تعرفه أو من عيلتك، فـ خليك سري جداً...</p>
          <p>شكراً ليك ❤️</p>
        </div>
      </div>
    `;
  });
}

function copyAccount() {
  let acc = document.getElementById('accountNumber');
  acc.select();
  document.execCommand('copy');
  alert('تم نسخ الرقم: 400963087');
}

function processOrder() {
  let file = document.getElementById('receipt').files[0];
  if (!file) {
    alert('ارفع الإيصال الأول');
    return;
  }

  document.querySelector('.container').innerHTML = `
    <div class="msg">
      <h2>طلبك بيتعالج دلوقتي استنى شوية...</h2>
      <p>⏳</p>
    </div>
  `;

  setTimeout(() => {
    document.querySelector('.container').innerHTML = `
      <div class="msg">
        <h2>✅ تم تأكيد طلبك بنجاح</h2>
        <p>هتجيلك رسالة بعد شوية فيها التفاصيل</p>
      </div>
    `;
  }, 60000);
}