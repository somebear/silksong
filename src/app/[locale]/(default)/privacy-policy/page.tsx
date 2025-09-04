import { setRequestLocale } from "next-intl/server";

export default function PrivacyPolicy({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-center">隐私政策</h1>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">简介</h2>
        <p className="mb-6">
          欢迎使用丝之歌中心（hollowknightsilksong.io），这是专为《空洞骑士：丝之歌》粉丝打造的中文资讯社区。我们非常重视您的隐私，本隐私政策概述了我们在您使用我们的服务时如何收集、使用和保护您的个人信息。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">信息收集和使用</h2>
        <p className="mb-4">我们收集以下类型的数据，以便为您提供更好的丝之歌中心使用体验：</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">1. 访问信息</h3>
        <ul className="mb-4">
          <li><strong>我们收集的内容:</strong> 包括您的IP地址、浏览器类型、访问时间和页面浏览记录。</li>
          <li><strong>用途:</strong> 用于网站分析、改善用户体验和内容优化。</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">2. 使用详情</h3>
        <ul className="mb-4">
          <li><strong>我们收集的内容:</strong> 关于您如何使用丝之歌中心的信息，包括您的互动行为、访问的功能和使用频率。</li>
          <li><strong>用途:</strong> 分析用户参与度并改进我们的服务。</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">3. 设备信息</h3>
        <ul className="mb-4">
          <li><strong>我们收集的内容:</strong> 关于您用来访问丝之歌中心的设备数据，如设备类型、操作系统和浏览器类型。</li>
          <li><strong>用途:</strong> 优化我们的服务以适配不同设备并确保兼容性。</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">4. Cookies</h3>
        <ul className="mb-4">
          <li><strong>我们收集的内容:</strong> 放置在您设备上的小数据文件，帮助我们跟踪用户偏好并改善用户体验。</li>
          <li><strong>用途:</strong> 增强我们服务的功能性并个性化您的体验。</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">5. 分析数据</h3>
        <ul className="mb-6">
          <li><strong>我们收集的内容:</strong> 通过Google Analytics收集的匿名统计数据，用于了解网站流量和用户行为。</li>
          <li><strong>用途:</strong> 改进网站内容和用户体验，优化《空洞骑士：丝之歌》相关资讯的呈现。</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">数据存储和安全</h2>
        <p className="mb-6">
          我们非常重视您个人信息的安全。我们收集的数据安全地存储在我们的服务器上，我们实施各种安全措施，包括加密和访问控制，以防止您的个人信息遭到未经授权的访问、更改、披露或破坏。但是，请注意，没有任何通过互联网传输的方法或电子存储方法是100%安全的，我们无法保证绝对的安全性。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">信息共享和披露</h2>
        <p className="mb-4">我们不会向外部方出售、交易或以其他方式转让您的个人信息，除非在以下情况下：</p>
        <ul className="mb-6">
          <li>遵守法律义务或回应公共当局的合法要求。</li>
          <li>保护我们的权利、财产或安全，或保护我们用户或其他人的权利、财产或安全。</li>
          <li>通过受保密协议约束的可信第三方合作伙伴提供服务，这些合作伙伴协助我们运营网站或开展业务。</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">广告服务</h2>
        <p className="mb-6">
          我们可能使用Google AdSense等广告服务在网站上展示广告。这些广告服务可能会使用Cookies和网络信标来收集信息，以便向您展示相关广告。您可以通过广告设置来管理广告偏好。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">政策变更</h2>
        <p className="mb-6">
          我们可能会不时更新此隐私政策。我们将通过在此页面上发布新政策来通知您任何更改。建议您定期查看此隐私政策以了解任何更改。此隐私政策的更改在发布到此页面时生效。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">联系我们</h2>
        <p className="mb-4">如果您对此隐私政策或我们的数据实践有任何疑问或担忧，请通过以下方式联系我们：</p>
        <p className="mb-4">
          <strong>网站域名:</strong> <a href="https://hollowknightsilksong.io" className="text-blue-600 hover:text-blue-800">hollowknightsilksong.io</a>
        </p>
        <p className="mb-6">
          <strong>邮箱:</strong> support@hollowknightsilksong.io
        </p>
        <p className="mb-8">
          通过使用丝之歌中心，您同意我们的隐私政策并同意其条款。感谢您信任我们处理您的信息！
        </p>

        <hr className="my-8" />
        <p className="text-center text-sm text-gray-500">
          <strong>最后更新日期:</strong> 2025年9月4日
        </p>
      </div>
    </div>
  );
}