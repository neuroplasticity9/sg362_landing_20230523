/* eslint-disable @next/next/no-img-element */
export function FooterCp() {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="relative" itemScope itemType="http://schema.org/Organization">
          <a
            href="http://sohagame.vn"
            title="SohaGame"
            className="sohaFooter"
            target="_blank"
          />
          <a className="text-[#000]" itemProp="url" href="https://lucgioiphongthan.vn" title="Lục Giới Phong Thần">
            Tam Quốc Chess </a> - Phát hành bởi SohaGame SohaGame <br />
          <span className="az">Tổng đài</span>:&nbsp;<span className="text-[#000]">19006639</span>
          <br />
          Người chịu trách nhiệm nội dung: Bà Nguyễn Thị Thùy Dung
          <br /> Email:{' '}
          <a className="text-[#000]" href="mailto:hotro@sohagame.vn">
            hotro@sohagame.vn
          </a>
          <br /> Hỗ trợ:{' '}
          <a href="https://hotro.sohagame.vn" target="_blank" rel="noopener" className="text-[#000]">
            https://hotro.sohagame.vn
          </a>
          <br />
          <div>
            {' '}
            Công ty TNHH Soha - Địa chỉ: Tầng 19, tòa nhà Center Building, Hapulico Complex <br className="md:inline hidden" /> số 1 Nguyễn Huy Tưởng, phường Thanh Xuân
            Trung, quận Thanh Xuân, thành phố Hà Nội.{' '}
          </div>
          <a className="text-[#000]" href="http://sohagame.vn dieu-khoan" target="_blank" title="Điều khoản" rel="noopener">
            Điều khoản
          </a>{' '}
          -{' '}
          <a href="https://lucgioiphongthan.vn/huong-dan" title="Hướng dẫn cài đặt và gỡ bỏ">
            Hướng dẫn cài đặt và gỡ bỏ
          </a>
          <a href="https://sohagame.vn/huong-dan-game" className="kich-ban">
            {' '}
            - Kịch bản hướng dẫn
          </a>
          <p className="text-[#c00]">Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe</p>
          <img
            src="https://sohagame.mediacdn.vn/public/sg73/nut-60px.jpg"
            className="play18H"
            width={60}
            height={98}
            alt="Lục Giới Phong Thần"
          />
        </div>
      </div>
    </footer>
  );
}
