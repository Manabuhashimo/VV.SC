import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="container">
      <Header />

      <section className="section mt-20">
        <div className="legal-page">
          <div className="legal-header">
            <h1 className="legal-title">プライバシーポリシー</h1>
            <p className="legal-updated">最終更新日: 2025年9月30日</p>
          </div>

          <div className="legal-content">
            <div className="legal-section">
              <h2 className="legal-heading">1. はじめに</h2>
              <p className="legal-text">
                VV.SC（ワールドストリートカルチャー）（以下「当サイト」といいます）は、
                ユーザーの個人情報の保護を重要視しています。本プライバシーポリシーは、
                当サイトがどのように個人情報を収集、使用、保護するかを説明するものです。
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">2. 収集する情報</h2>
              <p className="legal-text">
                当サイトは、以下の情報を収集する場合があります：
              </p>
              <ul className="legal-list">
                <li>氏名、メールアドレス等の連絡先情報</li>
                <li>IPアドレス、ブラウザの種類、使用デバイス等の技術情報</li>
                <li>サイトの利用状況、閲覧履歴等のアクセス情報</li>
                <li>お問い合わせ内容やご意見・ご感想</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">3. 情報の利用目的</h2>
              <p className="legal-text">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="legal-list">
                <li>サービスの提供、維持、改善のため</li>
                <li>ユーザーからのお問い合わせへの対応のため</li>
                <li>新機能やサービスに関する情報の提供のため</li>
                <li>利用規約違反や不正利用の防止のため</li>
                <li>統計データの作成および分析のため</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">4. Cookieおよび類似技術</h2>
              <p className="legal-text">
                当サイトでは、ユーザー体験の向上とサイト分析のため、CookieおよびGoogle Analytics等の
                類似技術を使用しています。これらの技術により、以下の情報を収集する場合があります：
              </p>
              <ul className="legal-list">
                <li>訪問回数や滞在時間</li>
                <li>閲覧ページや参照元サイト</li>
                <li>使用デバイスやブラウザの情報</li>
              </ul>
              <p className="legal-text">
                ブラウザの設定によりCookieを無効化することも可能ですが、
                一部の機能が正常に動作しない場合があります。
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">5. 第三者サービスの利用</h2>
              <p className="legal-text">
                当サイトでは、以下の第三者サービスを利用しています：
              </p>
              <ul className="legal-list">
                <li><strong>Google Analytics:</strong> アクセス解析のため</li>
                <li><strong>YouTube:</strong> 動画コンテンツの埋め込みのため</li>
                <li><strong>TikTok:</strong> 動画コンテンツの埋め込みのため</li>
                <li><strong>SNSプラットフォーム:</strong> ソーシャル機能の提供のため</li>
              </ul>
              <p className="legal-text">
                これらのサービスには独自のプライバシーポリシーがあり、
                当サイトは第三者によるデータ収集について責任を負いません。
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">6. 個人情報の第三者提供</h2>
              <p className="legal-text">
                当サイトは、以下の場合を除き、ユーザーの個人情報を第三者に提供することはありません：
              </p>
              <ul className="legal-list">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>国の機関等への協力が必要な場合</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">7. セキュリティ</h2>
              <p className="legal-text">
                当サイトは、個人情報の紛失、破壊、改ざん、漏洩等のリスクに対して、
                適切なセキュリティ対策を実施しています。ただし、インターネット上での
                データ送信の完全な安全性を保証するものではありません。
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">8. 未成年者の個人情報</h2>
              <p className="legal-text">
                当サイトは、保護者の同意なく13歳未満の子供から意図的に個人情報を収集することはありません。
                保護者の方は、お子様のインターネット利用について適切に監督してください。
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">9. プライバシーポリシーの変更</h2>
              <p className="legal-text">
                当サイトは、法令の変更やサービス内容の変更等に伴い、
                本プライバシーポリシーを予告なく変更する場合があります。
                変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
              </p>
            </div>

            <div className="legal-section">
              <h2 className="legal-heading">10. お問い合わせ</h2>
              <p className="legal-text">
                本プライバシーポリシーに関するご質問やご意見、
                個人情報の開示・訂正・削除等のご請求については、
                以下の連絡先までお問い合わせください。
              </p>
              <div className="contact-box">
                <p className="contact-info">
                  <strong>VV.SC（ワールドストリートカルチャー）</strong><br />
                  Email: privacy@vv.sc<br />
                  受付時間: 平日 10:00-18:00（日本時間）
                </p>
              </div>
            </div>

            <div className="legal-footer">
              <p className="legal-text-small">
                本プライバシーポリシーは、日本国の法令に準拠します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
