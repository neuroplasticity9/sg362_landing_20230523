/* eslint-disable @next/next/no-img-element */
export function FooterCp() {
  return (
    <footer className="bg-[#1f2340] text-[#fff] p-[20px] md:text-center text-[15px] font-roboto relative">
      <div className="md:w-[52.08333vw] m-0 ml-auto mr-auto">
        <div className="relative" itemScope itemType="http://schema.org/Organization">
          <a
            href="http://sohagame.vn"
            title="SohaGame"
            className="md:block hidden w-[9.375vw] h-[4.0625vw] absolute top-[1.30208vw] left-0 bg-left-top bg-contain bg-[url('https://sohagame.mediacdn.vn/public/sohagame/logo-shg-w.png')]"
            target="_blank"
            rel="noopener"
          />
          <a className="text-[#fffc00]" itemProp="url" href="https://lucgioiphongthan.vn" title="Lục Giới Phong Thần">
            <span itemProp="name">Lục Giới Phong Thần</span>{' '}
          </a>
          Start-up Thiên Đình - Phong chức thần ma 300 thế giới <br />
          <span className="az">Tổng đài</span>:&nbsp;<span className="text-[#fffc00]">19006639</span>
          <br />
          Người chịu trách nhiệm nội dung: Bà Nguyễn Thị Thùy Dung
          <br /> Email:{' '}
          <a className="text-[#fffc00]" href="mailto:hotro@sohagame.vn">
            hotro@sohagame.vn
          </a>
          <br /> Hỗ trợ:{' '}
          <a href="https://hotro.sohagame.vn" target="_blank" rel="noopener" className="text-[#fffc00]">
            https://hotro.sohagame.vn
          </a>
          <br />
          <div>
            {' '}
            Công ty TNHH Soha - Địa chỉ: Tầng 19, tòa nhà Center Building, Hapulico Complex <br className="md:inline hidden" /> số 1 Nguyễn Huy Tưởng, phường Thanh Xuân
            Trung, quận Thanh Xuân, thành phố Hà Nội.{' '}
          </div>
          <a className="text-[#fffc00]" href="http://sohagame.vn dieu-khoan" target="_blank" title="Điều khoản" rel="noopener">
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
          <p className="md:text-[#fff] text-[#c00]">Chơi quá 180 phút một ngày sẽ ảnh hưởng xấu đến sức khỏe</p>
          <img
            src="https://sohagame.mediacdn.vn/public/sg73/nut-60px.jpg"
            className="md:block hidden absolute right-0 top-0"
            width={60}
            height={98}
            alt="Lục Giới Phong Thần"
          />
          <div className="logos">
            <a
              href="https://sohagame.vn"
              className="soha"
              title="SohaGame"
              style={{
                background: 'url(https://sohagame.mediacdn.vn/project/all/both/navtop/img/logo-soha-footer-white.png) no-repeat',
                width: '9vw',
                height: '4vw',
                backgroundSize: '100%'
              }}
            />
            <div className="otherLogo" />
          </div>
        </div>
      </div>
    </footer>
  );
}
