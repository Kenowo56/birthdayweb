let currentPerson = '';

const messages = {
  'Ken': {
    password: null,
    message: 'สุขสันต์วันเกิด Ken! 🎉 ขอให้มีความขมากๆ สมหวังทุกอย่าง ❤️'
  },
  'Lalia': {
    password: null,
    message: 'สุขสันต์วันเกิด Lalia! 🎂 ขอให้สดใส ร่าเริง น่ารักแบบนี้ตลอดไป ✨'
  },
  'คะนิ้ง': {
    password: '520520520520',
    message: 'คำอวยพรของหนู : พี่ดาจะอายุ 23 ตลอดไป หนูรักพี่ดาเหมือนพี่สาวแท้ๆคนนึง ขอบคุณที่เกิดมาแล้วได้เจอพี่ๆทุกคนในดิส ดีใจที่ได้เป็นส่วนนึงของการเติบโต พี่ดาให้คำปรึกษาดีมาตลอด พี่ดาเข้มแข็งและเป็นไอดอลเสมอ สิ่งไหนที่เคยทำให้พี่ดาเสียใจหรือลำบากใจ หนูขอโทษจริงๆ ตอนนี้หนูโตขึ้นเยอะแล้ว ขอบคุณที่อุ้มและแบกหนูไปผจญภัยทุกที่ รักพี่ดาเสมอ⭐️✨'
  }
};

function openModal(person) {
  currentPerson = person;
  const personData = messages[person];

  if (!personData) {
    alert(`❗ ไม่พบข้อมูลของ "${person}"`);
    return;
  }

  document.getElementById('modal-title').textContent = person;
  document.getElementById('error').textContent = '';

  if (personData.password === null) {
    // ไม่มีรหัส => แสดงคำอวยพรเลย
    document.getElementById('password-section').style.display = 'none';
    document.getElementById('message-section').style.display = 'block';
    document.getElementById('wish-message').textContent = personData.message;
  } else {
    // ต้องใส่รหัส
    document.getElementById('password-section').style.display = 'block';
    document.getElementById('message-section').style.display = 'none';
    document.getElementById('password-input').value = '';
  }

  document.getElementById('modal').style.display = 'block';
}

function checkPassword() {
  const input = document.getElementById('password-input').value;
  const personData = messages[currentPerson];

  if (input === personData.password) {
    document.getElementById('password-section').style.display = 'none';
    document.getElementById('message-section').style.display = 'block';
    document.getElementById('wish-message').textContent = personData.message;
  } else {
    document.getElementById('error').textContent = 'รหัสผิดจ้า ลองใหม่!';
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// ปิด modal เมื่อคลิกรอบนอก
window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
    closeModal();
  }
};
