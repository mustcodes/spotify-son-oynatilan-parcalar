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
                <title>Spotify Son Çalınan Parçalar README Oluşturucu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Breadcrumb separator=">" style={{ marginBottom: 25 }}>
                <Breadcrumb.Item href="https://mdusova.com/">by mdusova</Breadcrumb.Item>
            </Breadcrumb>

            <div className="content">
                <Title level={2} style={{ fontWeight: 700, color: '#1DB954' }}>
                    Spotify Son Çalınan Parçalar
                </Title>
                
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
                }

                .content {
                    background: #f9f9f9;
                    border-radius: 8px;
                    padding: 20px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .auth-space {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            `}</style>
        </div>
    );
}
