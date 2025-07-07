// js/simpleAuth.js
import { db } from './firebaseConfig.js';
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Đăng ký
window.register = async () => {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;

  if (!username || !password) return alert("Vui lòng nhập đầy đủ thông tin.");

  // Kiểm tra xem username đã tồn tại chưa
  const q = query(collection(db, "users"), where("username", "==", username));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    alert("Tên đăng nhập đã tồn tại!");
    return;
  }

  // Thêm vào Firestore
  await addDoc(collection(db, "users"), {
    username,
    password, // Có thể hash mật khẩu nếu muốn
    createdAt: serverTimestamp()
  });

  alert("Đăng ký thành công!");
};

// Đăng nhập
window.login = async () => {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (!username || !password) return alert("Nhập đầy đủ thông tin.");

  const q = query(
    collection(db, "users"),
    where("username", "==", username),
    where("password", "==", password)
  );
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  } else {
    alert("Đăng nhập thành công!");
    window.location.href = "flashcard.html";
  }
};
