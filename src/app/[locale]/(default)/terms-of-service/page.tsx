import { setRequestLocale } from "next-intl/server";

export default function TermsOfService({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold mb-8 text-center">服务条款</h1>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">简介及条款接受</h2>
        <p className="mb-6">
          欢迎使用<strong>丝之歌中心</strong>（hollowknightsilksong.io），这是专为《空洞骑士：丝之歌》粉丝打造的中文资讯社区。通过访问或使用我们的服务，您同意受这些服务条款的约束。如果您不同意这些条款中的任何一项，请不要使用我们的服务。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">服务使用</h2>
        <p className="mb-6">
          丝之歌中心为用户提供关于《空洞骑士：丝之歌》的最新资讯、攻略指南、发售倒计时和社区讨论平台。您同意按照所有适用的地方、国家和国际法律法规使用该服务。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">用户访问和行为规范</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">1. 内容访问</h3>
        <p className="mb-4">大部分内容无需注册即可访问。我们致力于为所有用户提供免费的《空洞骑士：丝之歌》资讯服务。</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">2. 用户行为</h3>
        <p className="mb-4">在使用我们的服务时，您同意不从事任何可能损害网站运营或其他用户体验的行为。</p>
        
        <h3 className="text-xl font-semibold mt-6 mb-3">3. 社区互动</h3>
        <p className="mb-6">如果我们在未来开放评论或社区功能，您同意以尊重和建设性的方式参与讨论。</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">内容和知识产权</h2>
        <p className="mb-4">
          丝之歌中心提供的所有内容，包括但不限于游戏资讯、攻略指南、网站设计和技术架构，均受版权法保护。
        </p>
        <ul className="mb-6">
          <li>《空洞骑士：丝之歌》游戏本身的知识产权归Team Cherry所有。</li>
          <li>我们尊重Team Cherry及其他第三方的知识产权，网站内容仅用于信息分享和社区讨论。</li>
          <li>网站的原创内容和设计归hollowknightsilksong.io所有。</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">禁止行为</h2>
        <p className="mb-4">在使用丝之歌中心时，您同意不从事以下禁止活动：</p>
        <ul className="mb-6">
          <li>未经授权访问或干扰网站的安全性或性能</li>
          <li>将服务用于任何非法或未经授权的目的</li>
          <li>发布虚假、误导性或有害的《空洞骑士：丝之歌》相关信息</li>
          <li>尝试绕过网站的任何安全功能</li>
          <li>进行可能损害其他用户体验的恶意行为</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">隐私和数据收集</h2>
        <p className="mb-4">丝之歌中心收集以下类型的数据：</p>
        <ul className="mb-6">
          <li><strong>访问信息:</strong> 用于网站分析和优化的基本访问数据</li>
          <li><strong>使用详情:</strong> 与您在我们服务上的活动相关的数据</li>
          <li><strong>设备信息:</strong> 关于您用来访问我们服务的设备信息</li>
          <li><strong>Cookies:</strong> 有助于我们增强您服务体验的数据</li>
          <li><strong>分析数据:</strong> 通过Google Analytics收集的匿名统计数据</li>
        </ul>
        <p className="mb-6">
          有关数据收集实践的更多详细信息，请参阅我们的<a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">隐私政策</a>。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">服务免费性质</h2>
        <ul className="mb-6">
          <li>丝之歌中心是一个免费的资讯社区网站</li>
          <li>我们不收取任何订阅费用或服务费用</li>
          <li>网站可能通过广告获得收入以维持运营</li>
          <li>我们保留在未来引入付费功能的权利，但会提前通知用户</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">服务终止</h2>
        <p className="mb-6">
          我们保留在我们认为您的行为违反这些条款或对服务的其他用户、我们或第三方有害时，自行决定终止或暂停您对服务访问的权利，且不予通知。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">免责声明</h2>
        <p className="mb-6">
          服务按"现状"和"可用"基础提供。我们不对服务的准确性、可靠性或可用性做出任何保证或陈述，并在法律允许的最大范围内拒绝所有保证。我们努力提供准确的《空洞骑士：丝之歌》相关信息，但不保证信息的完全准确性或及时性。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">责任限制</h2>
        <p className="mb-6">
          在法律允许的最大范围内，hollowknightsilksong.io不对因使用或无法使用服务而产生的任何直接、间接、附带、特殊、后果性或惩罚性损害承担责任。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">赔偿</h2>
        <p className="mb-6">
          您同意赔偿并使hollowknightsilksong.io、其关联公司及其各自的高级职员、董事、员工和代理人免受因您使用服务或违反这些条款而产生的任何索赔、损害、损失、责任和费用（包括律师费）的损害。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">适用法律和争议解决</h2>
        <p className="mb-6">
          这些条款应受hollowknightsilksong.io运营所在司法管辖区的法律管辖和解释，不考虑其法律冲突条款。因这些条款或服务而产生的任何争议将通过适用法律规定的有约束力的仲裁来解决。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">条款变更</h2>
        <p className="mb-6">
          我们保留随时更新或修改这些条款的权利。更改将在我们网站上发布后立即生效。您在任何更改后继续使用服务表示您接受新条款。
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">联系信息</h2>
        <p className="mb-4">如果您对这些条款有任何疑问，请通过以下方式联系我们：</p>
        <p className="mb-4">
          <strong>网站域名:</strong> <a href="https://hollowknightsilksong.io" className="text-blue-600 hover:text-blue-800">hollowknightsilksong.io</a>
        </p>
        <p className="mb-6">
          <strong>邮箱:</strong> support@hollowknightsilksong.io
        </p>

        <hr className="my-8" />
        <p className="mb-6">
          通过使用丝之歌中心，您确认已阅读、理解并同意受这些服务条款的约束。感谢您选择丝之歌中心！
        </p>
        <p className="text-center text-sm text-gray-500">
          <strong>最后更新日期:</strong> 2025年9月4日
        </p>
      </div>
    </div>
  );
}