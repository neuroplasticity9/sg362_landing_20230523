/* eslint-disable @next/next/no-img-element */
import { FooterCp } from '@/components/footer';
export default function Page() {
  return (
    <>
      <main className="landing">
        <section className="page1">
          <div className='pageTitle'><h2 className='titleText font1'>Đập Bóng Hay - Nhận Quà Liền Tay</h2></div>
          <div className='pageLeft'>
            <div className='pageLeftTitle'>Số điểm hiện tại: <span className='txtDiem'>50</span></div>
            <div className='pageLeftItem'>Số điểm hiện tại: <span className='txtDiem'>50</span></div>
          </div>
        </section>
        <img className="bgLanding" alt="" src="/project/pX9TNcP/both/img/landing202305/bg-landing.webp" width="1920" height="3147" />
        <img className="m_bgLanding" alt="" src="/project/pX9TNcP/both/img/landing202305/bg-landing-mobile.webp" width="640" height="3364" />

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
