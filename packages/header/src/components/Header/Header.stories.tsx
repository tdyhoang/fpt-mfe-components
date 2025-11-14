import type { Meta, StoryObj } from "@storybook/react-vite";

import Header from "./index";

const mockUser = {
  name: "Pham Ba Hoang",
};

const meta = {
  title: "Modules/Header",
  component: Header,
  decorators: [
    (Story) => (
      <>
        <Story />
        <div style={{ padding: "200px", fontFamily: "sans-serif" }}>
          <p>Nội dung trang web nằm bên dưới Header.</p>
        </div>
      </>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Đây là module Header Micro Frontend. Nó có thể được nhúng vào bất kỳ ứng dụng nào dưới dạng Web Component `<fpt-header>`.",
      },
      source: {
        code: `
        // 1. Tải script từ micro frontend
        <script src="http://localhost:5001/fpt-header.js"></script>

        // 2. Sử dụng thẻ HTML và truyền dữ liệu qua attribute
        <fpt-header user-data='${JSON.stringify(mockUser)}'></fpt-header>

        // 3. Lắng nghe sự kiện navigate
        <script>
          window.addEventListener('navigate', (event) => {
            console.log('Cần navigate đến:', event.detail.path);
            // Logic router của ứng dụng container sẽ xử lý ở đây
          });
        </script>
        `,
        language: "html",
      },
    },
  },
  argTypes: {
    userData: {
      description: "Dữ liệu người dùng dưới dạng chuỗi JSON.",
      control: "text",
    },
    onNavigate: {
      description:
        "Callback được gọi khi người dùng click vào một link điều hướng. Event `navigate` sẽ được phát ra.",
      action: "navigated",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    userData: undefined,
  },
  parameters: {
    docs: {
      description: {
        story: "Trạng thái mặc định của Header khi người dùng chưa đăng nhập.",
      },
    },
  },
};

export const LoggedIn: Story = {
  args: {
    userData: JSON.stringify(mockUser),
  },
  parameters: {
    docs: {
      description: {
        story: "Trạng thái của Header khi người dùng đã đăng nhập.",
      },
    },
  },
};
