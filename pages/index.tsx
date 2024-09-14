import { Alert, Breadcrumb, Button, Space, Typography } from 'antd';
import Cookie from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MarkdownSnippet from '../components/MarkdownSnippet';
import SpotifyAuthButton from '../components/SpotifyAuthButton';
import { ClientId, RedirectUri } from '../utils/Constants';

const { Text, Title } = Typography;

export default function Home(): JSX.Element {
    const router = useRouter();
    const [currentUser, setCurrentUser] = useState<string | undefined>(undefined);
    const error = router.query['error'];

    useEffect(() => {
        const user = Cookie.get('spotifyuser');
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const handleClearCreds = () => {
        Cookie.remove('spotifyuser');
        window.location.reload();
    };

    return (
        <div className="container">
            <Head>
                <title>Spotify Son Oynatılan Müzikler - Mustafa Arda Düşova</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="header">
                <Breadcrumb separator=">" style={{ marginBottom: 25 }}>
                    <Breadcrumb.Item href="https://mdusova.com/">Yapımcı: mdusova</Breadcrumb.Item>
                </Breadcrumb>
                 <Breadcrumb separator=">" style={{ marginBottom: 25 }}>
                    <Breadcrumb.Item href="https://github.com/mustcodes/spotify-son-oynatilan-parcalar">Kaynak kodunu görüntüle</Breadcrumb.Item>
                </Breadcrumb>
                <Title level={2} style={{ fontWeight: 700, color: '#1DB954' }}>
                    Spotify Son Oynatılan Müzikler
                </Title>
            </div>

            <div className="content">
                {error && (
                    <Alert
                        message="Hata"
                        description={error}
                        type="error"
                        showIcon
                        style={{ marginBottom: 18 }}
                    />
                )}

                {!currentUser ? (
                    <Space className="auth-space" direction="vertical" size="middle">
                        <Text style={{ fontSize: '16px', color: '#595959' }}>
                            Spotify'ı yetkilendirerek başlayalım.
                        </Text>
                        <SpotifyAuthButton clientId={ClientId} redirectUri={RedirectUri} />
                    </Space>
                ) : (
                    <Space className="auth-space" direction="vertical" size="middle">
                        <MarkdownSnippet username={currentUser} />
                        <SpotifyAuthButton
                            clientId={ClientId}
                            redirectUri={RedirectUri}
                            label="Yeniden Yetkilendir"
                        />
                        <Button
                            type="link"
                            danger
                            onClick={handleClearCreds}
                            style={{ fontSize: '14px', padding: '0' }}
                        >
                            Yerel kimlik bilgilerini temizle
                        </Button>
                    </Space>
                )}
            </div>

            <style jsx>{`
                .container {
                    max-width: 900px;
                    margin: 0 auto;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .header {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    margin-bottom: 20px;
                }

                .content {
                    background: #f9f9f9;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    width: 100%;
                    max-width: 800px;
                }

                .auth-space {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                @media (max-width: 768px) {
                    .container {
                        padding: 10px;
                    }

                    .header {
                        margin-bottom: 15px;
                    }

                    .content {
                        padding: 15px;
                    }

                    .auth-space .ant-btn,
                    .auth-space .ant-btn-link {
                        font-size: 12px;
                    }

                    .auth-space .ant-typography {
                        font-size: 14px;
                    }
                }

                @media (max-width: 480px) {
                    .header {
                        margin-bottom: 10px;
                    }

                    .content {
                        padding: 10px;
                    }

                    .auth-space .ant-btn,
                    .auth-space .ant-btn-link {
                        font-size: 10px;
                    }

                    .auth-space .ant-typography {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
}
