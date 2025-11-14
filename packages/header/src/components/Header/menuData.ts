export interface MenuItem {
  new?: boolean;
  id: string;
  text: string;
  href: string;
}

export interface MenuColumn {
  id: string;
  title?: string;
  icon?: string;
  links: MenuItem[];
}

export interface MenuItemWithDropdown {
  id: number;
  title: string;
  hasDropdown?: boolean;
  type?: string;
  href?: string;
  columns?: MenuColumn[];
  links?: MenuItem[];
}

export const menuData: MenuItemWithDropdown[] = [
  {
    id: 1,
    title: "Sản phẩm dịch vụ",
    hasDropdown: true,
    type: "mega",
    columns: [
      {
        id: "col1",
        title: "Internet Cáp Quang",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/spdv/icon-internet-fpt.png",
        links: [
          {
            id: "1-1",
            text: "Internet cá nhân",
            href: "https://fpt.vn/internet-ca-nhan",
          },
          {
            id: "1-2",
            text: "Internet gia đình",
            href: "https://fpt.vn/internet-gia-dinh",
          },
          {
            id: "1-3",
            text: "Internet game thủ",
            href: "https://fpt.vn/internet-game-thu",
          },
          {
            id: "1-4",
            text: "Internet doanh nghiệp",
            href: "https://fpt.vn/internet-doanh-nghiep",
          },
        ],
      },
      {
        id: "col2",
        title: "Truyền hình & Giải trí",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/spdv/icon-fptplay.png",
        links: [
          {
            id: "2-1",
            text: "FPT Play",
            href: "https://fpt.vn/truyen-hinh-fpt-play",
          },
        ],
      },
      {
        id: "col3",
        title: "Giám Sát Thông Minh",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/spdv/icon-smarthome.png",
        links: [
          {
            id: "3-1",
            text: "FPT Camera",
            href: "https://fpt.vn/thiet-bi-camera",
          },
          {
            id: "3-2",
            text: "FPT Smart Home",
            href: "https://fpt.vn/thiet-bi-smart-home",
          },
        ],
      },
      {
        id: "col4",
        title: "Dịch vụ tiện ích",
        icon: "https://fpt.vn/storage/upload/images/menus/menu-head/462564079_881786490796767_4512469286751778495_n.png",
        links: [
          {
            id: "4-1",
            text: "F-Safe",
            href: "https://fpt.vn/bao-mat-f-safe",
          },
          {
            id: "4-2",
            text: "F-Safe Go",
            href: "https://fpt.vn/bao-mat-f-safe-go",
          },
          {
            id: "4-3",
            text: "Dịch vụ UltraFast",
            href: "https://fpt.vn/ultrafast",
          },
          {
            id: "4-4",
            text: "Dịch vụ HyperFast",
            href: "https://fpt.vn/hyperfast",
            new: true,
          },
        ],
      },
      {
        id: "col5",
        title: "Sức khỏe & Y tế",
        icon: "https://fpt.vn/storage/upload/images/menus/menu-head/icon-fpt-medicare.png",
        links: [
          {
            id: "5-1",
            text: "FPT MediCare",
            href: "https://fpt.vn/thiet-bi-medicare",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Tin tức & khuyến mãi",
    href: "https://fpt.vn/tin-tuc",
  },
  {
    id: 3,
    title: "Ưu đãi",
    hasDropdown: true,
    type: "simple",
    links: [
      {
        id: "3-1",
        text: "Khách hàng thân thiết",
        href: "https://fpt.vn/khach-hang-than-thiet",
      },
    ],
  },
  {
    id: 4,
    title: "Hỗ trợ",
    hasDropdown: true,
    type: "mega",
    columns: [
      {
        id: "col1",
        title: "Hỗ trợ thông tin",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/support-mn/icon-ho-tro-thong-tin.png",
        links: [
          {
            id: "1-1",
            text: "Câu hỏi thường gặp",
            href: "https://fpt.vn/ho-tro/cau-hoi-thuong-gap",
          },
          {
            id: "1-2",
            text: "Hướng dẫn sử dụng",
            href: "https://fpt.vn/ho-tro/huong-dan-su-dung",
          },
          {
            id: "1-3",
            text: "Chính sách và thủ tục",
            href: "https://fpt.vn/ho-tro/huong-dan-thu-tuc",
          },
          {
            id: "1-4",
            text: "Quản lý chất lượng dịch vụ",
            href: "https://fpt.vn/ho-tro/quan-ly-chat-luong-dich-vu",
          },
          {
            id: "1-5",
            text: "Điều khoản bảo mật",
            href: "https://fpt.vn/ho-tro/dieu-khoan-bao-mat",
          },
        ],
      },
      {
        id: "col2",
        title: "Hỗ trợ kỹ thuật",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/support-mn/icon-ho-tro-ky-thuat.png",
        links: [
          {
            id: "2-1",
            text: "Hướng dẫn cài đặt",
            href: "https://fpt.vn/ho-tro/huong-dan-cai-dat",
          },
          {
            id: "2-2",
            text: "Xử lý sự cố",
            href: "https://fpt.vn/ho-tro/xu-ly-su-co",
          },
        ],
      },
      {
        id: "col3",
        title: "Nhân viên hỗ trợ",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/support-mn/icon-lien-he-24-7.png",
        links: [
          {
            id: "3-1",
            text: "Tổng đài 19006600",
            href: "tel:19006600",
          },
          {
            id: "3-2",
            text: "Ứng dụng Hi FPT",
            href: "https://fpt.vn/hi-fpt",
          },
          {
            id: "3-3",
            text: "Kênh Zalo OA",
            href: "https://zalo.me/fpttelecom",
          },
        ],
      },
      {
        id: "col4",
        title: "Phòng giao dịch",
        icon: "https://fpt.vn/storage/upload/images/menus/icons/support-mn/device-message.png",
        links: [
          {
            id: "4-1",
            text: "Địa điểm",
            href: "https://fpt.vn/vi/khach-hang-ca-nhan/ho-tro/lien-he-24-7/diem-giao-dich",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Khác",
    hasDropdown: true,
    type: "simple",
    links: [
      {
        id: "5-1",
        text: "Member FPT",
        href: "https://fpt.vn/member",
      },
      {
        id: "5-2",
        text: "Thanh toán hoá đơn",
        href: "https://fpt.vn/pay/vi/auth",
      },
    ],
  },
];

export const mobileOnlyLinks = [
  { id: "m1", title: "Khách hàng cá nhân", href: "/vi/khach-hang-ca-nhan" },
  {
    id: "m2",
    title: "Khách hàng doanh nghiệp",
    href: "/vi/khach-hang-doanh-nghiep",
  },
];
