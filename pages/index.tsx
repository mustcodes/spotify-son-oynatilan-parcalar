import { Alert, Breadcrumb, Button, Space, Typography } from 'antd';
import Cookie from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MarkdownSnippet from '../components/MarkdownSnippet';
import SpotifyAuthButton from '../components/SpotifyAuthButton';
import { ClientId, RedirectUri } from '../utils/Constants';
import '../styles/styles.css'; // Stil dosyanızı import edin

const { Text, Title } = Typography;

const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
};

const vertSpaceStyle: React.CSSProperties = {
    marginTop: '10px',
    marginBottom: '10px',
};

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
        <div style={containerStyle}>
            <Head>
                <title>Spotify Son Çalınan Parçalar README Oluşturucu</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Breadcrumb separator=">" style={{ marginBottom: 25 }}>
                <Breadcrumb.Item href="/">Anasayfa</Breadcrumb.Item>
            </Breadcrumb>

            <div>
                <Title level={2}>Spotify Son Çalınan Parçalar README Oluşturucu</Title>
                {error && <Alert message="Hata" description={error} type="error" style={{ marginBottom: 18 }} />}

                {!currentUser ? (
                    <Space style={vertSpaceStyle} direction="vertical" size="middle">
                        <Text>Spotify'ı yetkilendirerek başlayalım.</Text>
                        <SpotifyAuthButton clientId={ClientId} redirectUri={RedirectUri} />
                    </Space>
                ) : (
                    <Space style={vertSpaceStyle} direction="vertical" size="middle">
                        <MarkdownSnippet username={currentUser} />
                        <SpotifyAuthButton clientId={ClientId} redirectUri={RedirectUri} label="Yeniden Yetkilendir" />
                        <Button type="link" danger onClick={handleClearCreds}>
                            Yerel kimlik bilgilerini temizle
                        </Button>
                    </Space>
                )}
            </div>
        </div>
    );
}
