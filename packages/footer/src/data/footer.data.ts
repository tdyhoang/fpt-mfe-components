export interface FooterLink {
  label: string;
  url: string;
  isHeader?: boolean;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  contactInfo: {
    registration: string;
    license: string;
    companyName: string;
    address?: string;
    headquarters?: string;
    contactAddress?: string;
    email: string;
    hotline: string;
    representative: string;
  };
  columns: FooterColumn[];
  socials: {
    icon: string;
    url: string;
  }[];
}

export const FOOTER_DATA: Record<"consumer" | "enterprise", FooterData> = {
  consumer: {
    contactInfo: {
      registration:
        "Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 28/07/2005",
      license:
        "Giấy phép cung cấp dịch vụ viễn thông số 255/GP-CVT do Cục Viễn Thông cấp ngày 07/11/2022",
      companyName: "Công ty Cổ phần Viễn thông FPT",
      address:
        "Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội",
      email: "hotrokhachhang@fpt.com",
      hotline: "024 7300 2222",
      representative: "Người đại diện: Ông Hoàng Việt Anh",
    },
    columns: [
      {
        title: "Về FPT Telecom",
        links: [
          {
            label: "Giới thiệu chung",
            url: "https://fpt.vn/vi/ve-fpt-telecom/gioi-thieu-chung.html",
          },
          {
            label: "Liên kết - Thành viên",
            url: "https://fpt.vn/vi/ve-fpt-telecom/lien-ket-thanh-vien.html",
          },
          {
            label: "Khách hàng - Đối tác",
            url: "https://fpt.vn/vi/ve-fpt-telecom/khach-hang-doi-tac",
          },
          {
            label: "Quan hệ cổ đông",
            url: "https://fpt.vn/vi/ve-fpt-telecom/quan-he-co-dong",
          },
          {
            label: "Tập đoàn FPT",
            url: "https://fpt.vn/vi/ve-fpt-telecom/tap-doan-fpt.html",
          },
          { label: "Tuyển dụng", url: "https://fptjobs.com/" },
          { label: "Tin tức", url: "https://fpt.vn/tin-tuc" },
        ],
      },
      {
        title: "Khách hàng FPT Telecom",
        links: [
          {
            label: "Hướng dẫn sử dụng dịch vụ",
            url: "https://fpt.vn/vi/khach-hang-ca-nhan/ho-tro/ho-tro-thong-tin/huong-dan-su-dung",
          },
          { label: "Thanh toán hóa đơn", url: "https://fpt.vn/pay" },
          {
            label: "Góp ý khách hàng",
            url: "https://fpt.vn/vi/khach-hang-ca-nhan/ho-tro/phan-hoi-khach-hang/gop-y.html",
          },
        ],
      },
      {
        title: "Sản phẩm dịch vụ",
        links: [
          {
            label: "Lắp đặt WiFi Internet",
            url: "https://fpt.vn/internet-ca-nhan",
          },
          {
            label: "Internet - Truyền hình FPT Play",
            url: "https://fpt.vn/truyen-hinh-fpt-play",
          },
          { label: "FPT Camera", url: "https://fpt.vn/thiet-bi-camera" },
          {
            label: "FPT Smart Home",
            url: "https://fpt.vn/thiet-bi-smart-home",
          },
          { label: "Khuyến mãi", url: "https://fpt.vn/tin-tuc/khuyen-mai" },
          {
            label: "Tìm điểm giao dịch",
            url: "https://fpt.vn/vi/khach-hang-ca-nhan/ho-tro/lien-he-24-7/diem-giao-dich",
          },
        ],
      },
    ],
    socials: [
      { icon: "hifpt1", url: "https://fpt.vn/hifpt.php" },
      { icon: "youtube1", url: "https://www.youtube.com/user/likefpt" },
      { icon: "instagram1", url: "https://www.instagram.com/fpt.telecom/" },
      { icon: "zalo1", url: "http://zalo.me/fpttelecom" },
      { icon: "facebook1", url: "https://www.facebook.com/FptTelecom/" },
      { icon: "19006600", url: "tel:19006600" },
    ],
  },
  enterprise: {
    contactInfo: {
      registration:
        "Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 28/07/2005",
      license:
        "Giấy phép cung cấp dịch vụ viễn thông số 255/GP-CVT do Cục Viễn Thông cấp ngày 07/11/2022",
      companyName: "Công ty Cổ phần Viễn thông FPT",
      headquarters:
        "Tầng 2, tòa nhà FPT Cầu Giấy, số 17 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, TP. Hà Nội",
      contactAddress:
        "Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội",
      email: "hotrokhachhang@fpt.com",
      hotline: "024 7300 2222",
      representative: "Người đại diện: Ông Hoàng Việt Anh",
    },
    columns: [
      {
        title: "Về FPT Telecom International",
        links: [
          {
            label: "Về FPT Telecom International",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/ve-fpt-telecom-international.html",
            isHeader: true,
          },
          {
            label: "Liên hệ",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/ho-tro-khach-hang-doanh-nghiep.html",
            isHeader: true,
          },
        ],
      },
      {
        title: "Dịch vụ",
        links: [
          {
            label: "Kênh thuê riêng và truyền tải dữ liệu",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/kenh-thue-rieng-va-truyen-tai-du-lieu.html",
          },
          {
            label: "Trung tâm dữ liệu FPT",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/trung-tam-du-lieu.html",
          },
          {
            label: "Dịch vụ FPT VoIP",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/dich-vu-fpt-voip.html",
          },
          {
            label: "FPT HI GIO CLOUD",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/fpt-hi-gio-cloud.html",
          },
        ],
      },
      {
        title: "Giải pháp khác",
        links: [
          {
            label: "Azure và Office 365",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/azure-va-office-365.html",
          },
          {
            label: "Hội nghị truyền hình và IP Camera",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/hoi-nghi-truyen-hinh-va-ip-camera.html",
          },
          {
            label: "Giải pháp Wifi",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/giai-phap-wi-fi.html",
          },
          {
            label: "Dịch vụ bảo mật",
            url: "https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/dich-vu-bao-mat.html",
          },
        ],
      },
    ],
    socials: [],
  },
};
