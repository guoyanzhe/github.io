document.getElementById('donateForm').addEventListener('submit', function(e) {
    e.preventDefault();  // 防止页面刷新

    // 获取表单输入的值
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // 检查输入是否有效
    if (name && email && amount > 0) {
        // 在这里可以进行表单数据的进一步处理，如发送到服务器
        console.log(`捐款者: ${name}, 邮箱: ${email}, 捐款金额: ${amount}`);

        // 隐藏捐款表单，显示感谢页面
        document.getElementById('donation-form').style.display = 'none';
        document.getElementById('thank-you').style.display = 'block';
    } else {
        alert('请填写所有信息并输入有效的金额');
    }
});
