import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const distDir = path.join(rootDir, "dist_cdn");

const run = (cmd, cwd) => {
  console.log(`👉 Running: ${cmd} in ${cwd || "root"}`);
  execSync(cmd, {
    stdio: "inherit",
    cwd: cwd ? path.join(rootDir, cwd) : rootDir,
  });
};

try {
  console.log("🏗️  Starting Enterprise Build Pipeline...");
  if (fs.existsSync(distDir))
    fs.rmSync(distDir, { recursive: true, force: true });
  fs.mkdirSync(distDir);
  fs.mkdirSync(path.join(distDir, "latest"));
  fs.mkdirSync(path.join(distDir, "libs"));
  fs.mkdirSync(path.join(distDir, "config"));

  run("pnpm install", "packages/vendor");
  run("pnpm build", "packages/vendor");
  fs.copyFileSync(
    path.join(rootDir, "packages/vendor/dist/vendor.js"),
    path.join(distDir, "libs/vendor.js")
  );

  run("pnpm build", "packages/header");
  fs.copyFileSync(
    path.join(rootDir, "packages/header/dist/fpt-header.js"),
    path.join(distDir, "latest/fpt-header.js")
  );

  run("pnpm build", "packages/footer");
  fs.copyFileSync(
    path.join(rootDir, "packages/footer/dist/fpt-footer.js"),
    path.join(distDir, "latest/fpt-footer.js")
  );

  if (fs.existsSync(path.join(rootDir, "configs/header.json"))) {
    fs.copyFileSync(
      path.join(rootDir, "configs/header.json"),
      path.join(distDir, "config/header.json")
    );
  }
  if (fs.existsSync(path.join(rootDir, "configs/footer.json"))) {
    fs.copyFileSync(
      path.join(rootDir, "configs/footer.json"),
      path.join(distDir, "config/footer.json")
    );
  }

  const headersContent = `
/*
  Access-Control-Allow-Origin: *
  Access-Control-Allow-Methods: GET, OPTIONS
  Access-Control-Allow-Headers: *
  Cache-Control: public, max-age=3600
  X-Content-Type-Options: nosniff

/libs/vendor.js
  Cache-Control: public, max-age=31536000, immutable

/config/*.json
  Cache-Control: public, max-age=300, must-revalidate
`;

  fs.writeFileSync(path.join(distDir, "_headers"), headersContent.trim());

  const htmlContent = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FPT Micro Frontend - CDN Demo</title>
    <script src="/libs/vendor.js" />
    <script src="/latest/fpt-header.js" async />
    <script src="/latest/fpt-footer.js" async />
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; margin: 0; background: #f4f4f4; }
        .host-container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; min-height: 60vh; background: white; box-shadow: 0 4px 15px rgba(0,0,0,0.05);  }
        h1 { color: #191e67; margin-top: 0; }
        .status-badge {
            display: inline-block; padding: 6px 12px; background: #e6f4ea; 
            color: #1e8e3e; border-radius: 20px; font-weight: 600; font-size: 14px;
        }
    </style>
</head>
<body>
    <fpt-header />
    <main class="host-container">
        <span class="status-badge">System Ready</span>
        <h1>Host Application</h1>
        <p>Trang web này đang tải Header và Footer từ hệ thống Private CDN.</p>
        <p>Trạng thái: <strong>✅ Ready for Production</strong></p>
    </main>
    <fpt-footer variant="enterprise" />
</body>
</html>`;
  fs.writeFileSync(path.join(distDir, "index.html"), htmlContent);

  console.log("\n✅ BUILD SUCCESSFUL! System is ready.");
} catch (error) {
  console.error("\n❌ BUILD FAILED:", error);
  process.exit(1);
}
