let currentPerson = '';

const messages = {
  'preammy': {
    password: null,
    message: 'คำอวยพร : สุขสันต์วันเกิดนะพี่ดา ขอให้พี่อยู่กับพวกเราไปนานๆเป็นพี่ที่น่ารักของหนูตลอดไปหนูก็จะเป็นเป็ดน้อยของพี่ดาตลอดไป พรีมรักพี่ดาที่สุดเลยยยย',
   
  },
  'Lalia': {
    password: null,
    message: 'สุขสันต์วันเกิดพี่ดาอ้วนๆของทุกคน วันเกิดปีนี้ก็ขอให้มีความสุขมากๆถึงหนูจะเคยทำตัวแย่ๆใส่บางครั้งแต่หนูก็ยังรักพี่ดาแบบอ้วนมากๆ55555 แล้วก็หนูรอพี่ดามาสู่ขอหนูแต่งงานอยู่นะ🥰',
    
  },
  'Kaning': {
    password: '520520520520',
    message: 'คำอวยพรของหนู : พี่ดาจะอายุ 23 ตลอดไป หนูรักพี่ดาเหมือนพี่สาวแท้ๆคนนึง ขอบคุณที่เกิดมาแล้วได้เจอพี่ๆทุกคนในดิส ดีใจที่ได้เป็นส่วนนึงของการเติบโต พี่ดาให้คำปรึกษาดีมาตลอด พี่ดาเข้มแข็งและเป็นไอดอลเสมอ สิ่งไหนที่เคยทำให้พี่ดาเสียใจหรือลำบากใจ หนูขอโทษจริงๆ ตอนนี้หนูโตขึ้นเยอะแล้ว ขอบคุณที่อุ้มและแบกหนูไปผจญภัยทุกที่ รักพี่ดาเสมอ⭐️✨',
    
  },
  'bokbok': {
    password: null,
    message: 'หนูจะรอดูวันที่พี่ประสบความสำเร็จ การงานดี มีเงิน แล้วมาเป็นเสี่ยให้หนู',
  
  },
  'April': {
    password: null,
    message: 'สุขสันต์วันเกิดแม่ดาที่น่ารัก หนูเห็นแม่ดาบอกว่ามีลูกเยอะแล้ว แต่ยังไม่มีผัว งั้นหนูขอให้แม่ดาหาผัวเจอนะ🥰',
    
  },
    'Meow': {
    password: '2525',
    message: 'สุขสันต์วันเกิดนะพี่ดา ขอให้มีความสุขและจง 18 ตลอดไปนะ พี่ดาแมวอ้วน ให้จกพุงให้ยืดด้วย อิอิ',
    image: 'image/meow.png'

    
  },
      'Aoy': {
    password: '5656565656565656556',   
    message: 'สุขสันต์วันเกิดยัยดาของฉันปีนี้เธอก็แก่ขึ้นและฉันดีใจนะที่เห็นเธอน่ะมีความสุขมากๆเห็นทุกๆคนทำให้เธอขำเธอน่ะโครตจะเป็นที่รักของทุกคนเลยฉันอยากจะคุยกับเธเเล่นเกมกับเธอนะแต่คือช่วงนี้แหละหน่าที่ฉันไม่ค่อยว่างเลยแทบไม่ได้คุยกับแกเลยและแถมยังไม่ได้เล่นโรบูดกับแกอีกรอฉันว่างและหายเครียดก่อนนะเธอจะได้เห็นฉันเป็นยัยออยของเธอคนเดิมที่สดใสและน่ารักคิดถึงนะไว้เจอกันช่วงที่ฉันว่างนะ👁️🫦👁️🫶💐🤍 อ่าเธออาจจะสงสัยกับรหัสของฉันว่าทำไมถึงเป็น56เพาระฉันชอบ'
     + '56ยังไงไงละอ่อไม่มีหรอกสาระตรงนี้อะมีแต่สาหร่ายเอาป่ะหอละ5บาทเดียวซื้อให้🤩',
  },
    'Iris': {
    password: null,
    message: 'คำอวยพรเป็น : HBD ขอให้พี่ดารักแมวมากๆเลี้ยงแมวดีๆอยู่กับแมวไปนานๆ คิดอะไรได้แมว ทำอะไรได้แมว',
     },

    'Proton': {
    password: null,
    message: 'คำอวยพรเป็น : HBD พี่ดาขอให้เป็นกระต่ายของหมากับแมวไปนานๆ รอพี่ดากลับมาเล่นไอเดนไลฟ์โค้ดอยู่นะ',
     },
    'Fai': {
    password: null,
    message: 'ขอให้สุขล้นๆสุขภาพร่างกายแข็งแรงค้าบรักๆพี่ดา59 คิดถุงนะจุ้บม้วฟมะงื้อห์เป็นแฟนหนูเถอะ',
     },
    
    'Banana': {
    password: null,
    message: 'แฮปๆ พี่ดา ขอให้มีแต่เรื่องดีๆ เข้ามาในชีวิต มีความสุขทุกๆ วัน มีแต่คนรักพี่ดา ก้วย หัวใจ พี่ดา ตลอดปุยยยย',
     },

     'Nat': {
    password: null,
    message: 'ขอให้พี่ดาอ้วนๆอย่างนี้ตลอดไปแข็งแรงไม่ปวดหลัง กินไก่ทอดอร่อยๆหาแฟนได้เร็วๆ แล้วก็อายุยืนอยู่เป็นร่มโพธิ์ร่มไทรให้ลูกหลานไปอีกนานๆ',
     },

    'Kenocat': {
    password: null,
    message: 'meow meoww meoooow',
     },

     'ไม่ระบุนาม': {
  password: null,
  message: `
As you begin this new journey toward becoming คุณหมอดา, I hope you never forget the power of being you
You don’t need to be perfect, You just need to be real, strong, and true to yourself and that's already more than enough

ตอนนี้พี่มีครบทุกอย่างและพร้อมมากๆ brains, heart, and the courage และคนที่เป็นที่รักของพี่
So walk your path with confidence. Trust your instincts. Speak your truth.
The world needs your kind of light, just the way you are
Don't be afraid to be weak, don't be afraid to give up, just dare to rise up again.

I’m so proud of you today and always.
Keep going, keep believing, and don’t be afraid to shine in your own way
และเชื่อว่าตอนนี้พี่ดาได้ประสบความสำเร็จมากๆแล้วในหลายๆด้าน แถมยังเป็นตัวอย่างให้น้องๆในดิสอีกหลายๆคนไม่มากก็น้อย
สิ่งที่หนูได้เรียนรู้จากพี่คือ no matter who we are, our age, or อาชีพอะไร แต่สิ่งที่พวกเขาจะเรียนรู้จากเราคือ actions ของพวกเรา
ขอให้ต่อจากนี้พี่มีความสุขมากๆ
`
},
'Porny': {
    password: null,
    message: 'ก็ HBDนะคั้บปี๋ดา ขอให้พี่ดามีความสุขมากๆๆ คิดถึงพี่ดาที่สุดในโลก! ขอให้ได้กินของอร่อยทุกทุกวันน ยินดีด้วยกับการเรียนจบ เย้! พี่ดาก็จะเป็นหมอที่ดีและใจดีที่สุดในโลก!',
     },
'Noah': {
    password: null,
    message: 'พี่ดาราชากบ ผึ้ง ผีเสื้อตู่ตุดตุด มีความสุขมากๆสุขภาพแข็งแรง มีเรื่องเครียดหนักหัวน้อยลง อ้วนให้มากๆขอให้เจอเพื่อนร่วมงานที่น่ารัก กับหัวหน้าที่ดีนะครับ Happy birthday na krab 🎁🥳',
     },
'Ken': {
    password: 'PATTARAWADEE LUANGANGGOON',
    message: `ผมคงไม่ต้องพูดอะไรเพิ่มเติม หลังจากที่พี่อ่านของทุกคนแล้ว ผมไม่ได้รวย ผมไม่ได้เก่ง สิ่งเดียวที่ผมมีและทำได้คือเรื่องโค้ดและโปรแกรม ตลอดหลายปีมานี้ผมไม่รู้ว่าผมสามารถให้อะไรกับพี่ได้ในวันสำคัญนอกจากสิ่งๆเดียวที่ผมทำได้ เป็นยังไงบ้าง โอเคกับคำอวยพรของทุกคนที่อยู่ในเว็บไซต์นี้ไหม สิ่งที่ผมรู้คือพี่ไม่ได้ชอบวันเกิดของตัวเอง ผมหวังว่าการเขียนเว็ปไซต์แค่11ชั่วโมงของผมจะทำให้รู้สึกว่า "วันเกิดของพี่" ก็ไม่ได้แย่นิ มีคนมากมายที่รัก และผมก็เช่นกัน หลังจากนี้ชีวิตผมคงต้องเดินในเส้นทางที่ไม่มีเวลามากพอจะกลับมาดิสได้ (ถ้าไม่ว่างจริงๆ) ขอบคุณที่อยู่ข้างกันมาตลอด ขอบคุณทุกความสนับสนุนของพี่ ที่มีให้ผม ผมหวังว่าการเขียนเว็ปบ้านๆของผม ทำให้พี่รู้สึกดีกับวันที่เรียกว่า"วันเกิด" ของพี่ได้ :) 
    `
     },

// ตรงนี้ลืมปิดวงเล็บใหญ่ของ messages

    
   


  
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
    // ไม่ใช้รหัสผ่าน
    document.getElementById('password-section').style.display = 'none';
    document.getElementById('message-section').style.display = 'block';
    document.getElementById('wish-message').textContent = personData.message;
    const imgEl = document.getElementById('wish-image');
    if (personData.image) {
    imgEl.style.display = 'block';
     imgEl.src = personData.image;
        } else {
  imgEl.style.display = 'none';
    }

  } else {
    // ใช้รหัสผ่าน
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
    const imgEl = document.getElementById('wish-image');
if (personData.image) {
  imgEl.style.display = 'block';
  imgEl.src = personData.image;
} else {
  imgEl.style.display = 'none';
}

  } else {
    document.getElementById('error').textContent = 'รหัสผิดจ้า ลองใหม่!';
  }
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// ปิด modal เมื่อคลิกข้างนอก
window.onclick = function(event) {
  if (event.target == document.getElementById('modal')) {
    closeModal();
  }
};
