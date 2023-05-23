import Script from 'next/script';
import { FooterCp } from '../components/footer';
import { HeaderCp } from '../components/header';
import './globals.scss';

export const metadata = {
  title: 'Skin Rosemary thương hiệu thuộc Công ty Thương Mại Dịch Vụ và Phát Triển Minh Vũ',
  description: 'Skin Rosemary Việt Nam phối hợp cùng Dr. Seoul Skin trong việc tổ chức các chương trình đào tạo, cập nhật và nâng cao kiến thức cũng như kỹ năng về tiêm Meso B.A.P. Đội ngũ nhân viên được được đào tạo thêm kiến thức bệnh học, kỹ thuật tiêm, tìm hiểu triệu chứng, dấu hiệu và cách xử lý các tình huống phát sinh.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex,nofollow" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
