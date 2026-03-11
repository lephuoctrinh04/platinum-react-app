function App() {
  return (
    <div className="container">

      <h1>Platinum</h1>

      <nav>
        <a href="#">Trang chủ</a>
        <a href="#">Dịch vụ</a>
        <a href="#">Liên hệ</a>
      </nav>

      <h2>Thiết kế Website Chuyên Nghiệp</h2>
      <p>Xây dựng giao diện hiện đại, chuẩn responsive.</p>

      <h3>Dịch vụ của chúng tôi</h3>

      <div className="services">
        <div>
          <h4>Thiết kế UI</h4>
          <p>Thiết kế giao diện đẹp, tối ưu trải nghiệm.</p>
        </div>

        <div>
          <h4>Frontend</h4>
          <p>HTML, CSS, React hiện đại.</p>
        </div>

        <div>
          <h4>Responsive</h4>
          <p>Tương thích mobile và desktop.</p>
        </div>
      </div>

    </div>
  )
}

export default App