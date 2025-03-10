// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

function App() {
  // State lưu địa chỉ IP của điện thoại
  const [ipAddress, setIpAddress] = useState('http://192.168.1.191:8080');

  // Tạo URL để lấy video
  const videoUrl = ipAddress ? `${ipAddress}/video` : '';

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Android Camera Stream</h1>

      {/* Ô nhập địa chỉ IP của điện thoại */}
      <input
        type="text"
        placeholder="Nhập IP của điện thoại (vd: http://192.168.x.x:8080)"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        style={{ padding: '10px', width: '80%', maxWidth: '600px', marginBottom: '20px' }}
      />

      {/* Nếu đã nhập IP, hiển thị luồng video */}
      {ipAddress && (
        <div>
          <h2>Camera Live Stream</h2>
          <img
            src={videoUrl}
            alt="Android Camera Stream"
            style={{ width: '100%', maxWidth: '800px', border: '2px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
}

export default App;
