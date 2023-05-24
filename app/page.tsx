/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
// import Image from 'next/image';
import { FooterCp } from '@/components/footer';
export default function Page() {
  return (
    <>
      <div className="mnNavtop font1">
        <a className="mnNavItem" href='#'>Tải game</a>
        <a className="mnNavItem" href='#'>Trang chủ</a>
        <a className="mnNavItem" href='#'>Fanpage</a>
      </div>
      <main className="landing">
        <section className="page1">
          <a className="logo" href="#">
            <img src="/project/pX9TNcP/both/img/landing202305/tam-quoc-chess-logo.webp" alt="" />
          </a>
          <div className="pageTitle">
            <h2 className="titleText font1">Đập Bóng Hay - Nhận Quà Liền Tay</h2>
          </div>
          <div className="pageLeft">
            <div className="plTitle font1">
              Số điểm hiện tại: <span className="txtDiem">50</span>
            </div>
            <div className="plItem hScale font1">Thêm lượt</div>
            <div className="plTitle plTitle2 font1">
              Số lượt hiện tại: <span className="txtDiem">200</span>
            </div>
            <div className="plItem hScale font1">Đổi quà</div>
            <div className="plItem hScale font1">Thể lệ</div>
            <div className="plItem hScale font1">Lịch Sử</div>
          </div>
          <div className="pageRight">
            <div className="prContent">
              <div className="prItem">
                <div className="itemCard font1">Thẻ SohaCoin</div>
                <div className="itemCardValue font1">20K</div>
                <div className="prStar"></div>
              </div>
              <div className="prItem">
                <div className="itemCardScore font1">
                  10<span className="icsText">Điểm</span>
                </div>
                <div className="prStar"></div>
              </div>
              <div className="prItem active">
                <div className="itemCard font1">Thẻ SohaCoin</div>
                <div className="itemCardValue font1">500K</div>
                <div className="prStar"></div>
              </div>
              <div className="prItem">
                <div className="itemCardScore font1">
                  20<span className="icsText">Điểm</span>
                </div>
                <div className="prStar"></div>
              </div>

              <div className="prItem">
                <div className="itemCard font1">Thẻ SohaCoin</div>
                <div className="itemCardValue font1">100K</div>
                <div className="prStar"></div>
              </div>
              <div className="prItem">
                <div className="itemCardScore font1">
                  50<span className="icsText">Điểm</span>
                </div>
                <div className="prStar"></div>
              </div>
              <div className="prItem">
                <div className="itemCard font1">Thẻ SohaCoin</div>
                <div className="itemCardValue font1">50K</div>
                <div className="prStar"></div>
              </div>
              <div className="prItem">
                <div className="itemCardScore font1">
                  100<span className="icsText">Điểm</span>
                </div>
                <div className="prStar"></div>
              </div>
            </div>
            <a className="btnQuay hScale" href="#"></a>
            <a className="btnQuay10x hScale" href="#"></a>
          </div>
        </section>
        <section className="page2">
          <div className="pageTitle pageTitle2">
            <h2 className="titleText titleText2 font1">Tích vòng Nhận quà cực thích</h2>
          </div>
          <div className="pageDesc font1">
            Chỉ cần tích lũy số vòng hoàn thành đạt các mốc quy định, Tướng Quân sẽ được phần quà vô cùng hấp dẫn dưới đây. Tích vòng thả ga nhận quà cực đã
          </div>
          <div className="page2Content">
            <div className="p2Item hScale">
              <div className="p2ItemText font1">25 vòng</div>
            </div>
            <div className="p2Item hScale">
              <div className="p2ItemText font1">50 vòng</div>
            </div>
            <div className="p2Item hScale">
              <div className="p2ItemText font1">100 vòng</div>
            </div>
            <div className="p2Item hScale">
              <div className="p2ItemText font1">200 vòng</div>
            </div>
            <div className="p2Item hScale">
              <div className="p2ItemText font1">500 vòng</div>
            </div>
            <div className="p2Item hScale">
              <div className="p2ItemText font1">1000 vòng</div>
            </div>
          </div>
        </section>
        <img className="bgLanding" alt="" src="/project/pX9TNcP/both/img/landing202305/bg-landing.webp" width="1920" height="3147" />
        <img className="m_bgLanding" alt="" src="/project/pX9TNcP/both/img/landing202305/bg-landing-mobile.webp" width="640" height="3364" />

        {/* <Image src="/project/pX9TNcP/both/img/landing202305/sohagame-black.png" width="184" height="64" alt="ccc" /> */}

        {/* <img alt="" src="/project/pX9TNcP/both/img/landing202305/btn_quay_1x.webp" width="369" height="154" />
        
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/btn_quay_10x.webp" width="369" height="154" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/menuright_bg.webp" width="156" height="43" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/menuright_bg_active.webp" width="156" height="44" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/menuright_zone.webp" width="199" height="326" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/page_name_bg.webp" width="542" height="175" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/page1_right_item_bg.webp" width="201" height="188" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/page1_right_item_bg_active.webp" width="201" height="188" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/page1_slidebar_item_bg.webp" width="191" height="52" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/page1_slidebar_title_bg.webp" width="339" height="107" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/page2_item_bg.webp" width="333" height="284" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/star.webp" width="176" height="147" />
        <img alt="" src="/project/pX9TNcP/both/img/landing202305/tam-quoc-chess-logo.webp" width="285" height="260" /> */}
        <FooterCp />
      </main>
    </>
  );
}
