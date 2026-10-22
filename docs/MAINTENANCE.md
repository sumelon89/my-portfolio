# Portfolio 维护与发布指南

正式网站：[www.surihuang.com](https://www.surihuang.com/)

源码仓库：[sumelon89/my-portfolio](https://github.com/sumelon89/my-portfolio)

部署后台：[Vercel my-portfolio](https://vercel.com/sumelon93/my-portfolio)

## 网站现在放在哪里

GitHub 保存源码和版本历史，Vercel 构建并托管网站，域名指向 Vercel。网站运行不依赖 Replit。

如果 Replit 没有其他仍在使用的项目，可以取消其月订阅。保留域名注册商的域名续费；不要把取消托管订阅理解为取消域名。此指南不表示已代用户取消任何订阅。

## 修改内容的位置

| 要修改的内容 | 文件 |
| --- | --- |
| 首页标题与问候语 | `src/components/Hero.tsx` |
| 敲石头互动与点击提示 | `src/components/PixelGrowth.tsx` |
| 真人头像显示 | `src/components/SuriAvatar.tsx`、`public/images/suri-avatar.png` |
| 三个核心案例卡片 | `src/components/FeaturedProjects.tsx` |
| 案例名称与简述 | `src/data/projects.ts` |
| 案例详细内容与成果口径 | `src/data/case-stories.ts` |
| 案例旅程位置和三步图解 | `src/components/CaseOverview.tsx` |
| 工具入口卡片 | `src/components/WorkSamples.tsx` |
| 工具详情、图片、贡献与功能边界 | `src/data/work-samples.ts` |
| MKT Coffee Chat 与话题互动 | `src/components/SideProjects.tsx` |
| About 经历、教育与方法 | `src/app/about/page.tsx` |
| 工具箱及 HC1、Apollo 等条目 | `src/components/Toolkit.tsx` |
| 联系方式与简历入口 | `src/components/ContactCTA.tsx` |
| 预设问答 | `src/components/PortfolioChat.tsx` |
| 颜色、排版与动效 | `src/app/globals.css` |
| 首页滚动入场 | `src/components/Motion.tsx` |

`src/data/background.ts` 是经历参考数据，当前 About 的部分可见内容直接写在页面中。修改经历时应同时检查两处，避免口径不一致。

## 日常更新流程

1. 修改源码，保留原有正式版本。
2. 本地运行 `npm ci` 和 `npm run dev`，检查改动。
3. 运行 `npm run build`；涉及聊天接口时运行 `npm run test:chat`。
4. 提交到 GitHub。建议先使用分支或 PR 查看变更，再合并到 `main`。
5. 在 Vercel 确认新提交的生产部署显示 Ready。
6. 打开正式域名，确认看到的是新版，并检查受影响的页面、图片与互动。

不要把 `localhost` 或 `127.0.0.1` 链接作为对外网站地址。

## 如果上线出了问题

在 Vercel 打开项目的 Deployments，选择此前成功的部署，通过可用的回滚操作恢复，并再次检查正式域名。回滚托管版本后，还应处理 GitHub 中引入问题的提交，避免下一次推送重新发布问题版本。

2026 年 10 月 22 日首个新版发布提交：`e69af888044ed04410bedb27346799094a6dd423`。

## 简历入口

当前使用邮件链接“Request resume”，没有发布占位 PDF。

正式简历确认后：

1. 将最终 PDF 放入 `public/resume.pdf`。
2. 将 `ContactCTA.tsx` 中的简历邮件链接改为 `/resume.pdf`，并更新按钮文字。
3. 更新聊天参考资料中的简历状态；只有实际加入全文时才填写 `resumeText`。
4. 上线后测试下载、PDF 内容和个人信息。

## Ask Me Anything

当前界面是预设问答，不调用模型，也不需要 API key。答案在 `PortfolioChat.tsx` 中维护；未知问题引导访客联系 Suri。对话保存在当前页面内存中。

源码保留了 `/api/chat` 和相应测试。若未来启用 AI，需要同时修改前端调用、完善公开接口的使用限制，并通过 Vercel 环境变量配置服务端密钥。仅添加 `OPENAI_API_KEY` 不会自动启用前端 AI 聊天。不要在 GitHub、公开变量或聊天记录中保存密钥。

## 数据和展示边界

- 工具页展示的是截图 walkthrough，不是公司内部工具的公开登录入口。
- Demo 数据、模拟导入和假设情景不能写成真实业绩或已经接通的数据源。
- 保留 Vic 原 tracking foundation 与 Suri 新增工作的贡献区别。
- 激活变化是带口径限制的方向性估算，涉及 Marketing、Sales、CS 的共同贡献。
- 新增社区引述、参与者照片或内部材料前，先确认可公开的范围。

## 已知维护事项

- `npm run build` 已通过；它包含 TypeScript 检查。
- `npm run test:chat` 使用 `tests/chat.test.cjs`，测试可选 API 的输入校验与错误处理等行为。
- 全库 lint 尚有原有的 ThemeToggle effect 状态更新、CommonJS 测试 import 报错，以及普通 img 标签优化提醒。它们与文档更新分开处理，不应将 lint 描述为全部通过。
- 正式简历仍待定稿；聊天界面当前保持预设问答。
