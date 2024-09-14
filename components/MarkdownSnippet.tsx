import { Input, Space, Typography, Row, Col } from 'antd';
import React from 'react';
import * as Constants from '../utils/Constants';

const { Text, Title } = Typography;
const { TextArea } = Input;

interface Props {
    username?: string;
}

export default function MarkdownSnippet(props: Props): JSX.Element | null {
    const { username } = props;
    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc})`;
    const customCount = `![Alt text](${svgSrc}&count={count})`;
    const customWidth = `![Alt text](${svgSrc}&width={width})`;
    const uniqueTracks = `![Alt text](${svgSrc}&unique={true|1|on|yes})`;

    return (
        <Row justify="center" style={styles.container}>
            <Col xs={24} sm={20} md={16} lg={12}>
                <Space direction="vertical" size="middle">
                    <Title level={4} style={styles.title}>{username} olarak giriş yapıldı.</Title>
                    <Text strong>Markdown kod parçacığı:</Text>
                    <TextArea style={styles.textArea} autoSize readOnly value={markdownCode} />
                    <Text>
                        Özel sayı için (
                        <b>
                            {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                        </b>
                        ):
                    </Text>
                    <TextArea style={styles.textArea} autoSize readOnly value={customCount} />
                    <Text>
                        Özel genişlik için (
                        <b>
                            {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                        </b>
                        ):
                    </Text>
                    <TextArea style={styles.textArea} autoSize readOnly value={customWidth} />
                    <Text>Benzersiz parçalar için:</Text>
                    <TextArea style={styles.textArea} autoSize readOnly value={uniqueTracks} />
                    <object type="image/svg+xml" data={svgSrc} style={styles.svg}></object>
                </Space>
            </Col>
        </Row>
    );
}

const styles = {
    container: {
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginTop: '20px',
    },
    title: {
        textAlign: 'center',
        color: '#1890ff',
    },
    textArea: {
        border: '1px solid #d9d9d9',
        padding: '10px',
        backgroundColor: '#fff',
        borderRadius: '4px',
        fontFamily: "'Courier New', Courier, monospace",
    },
    svg: {
        width: '100%',
        height: 'auto',
        marginTop: '10px',
    },
    // Mobil uyumlu tasarım
    '@media (max-width: 768px)': {
        container: {
            padding: '15px',
        },
        title: {
            fontSize: '18px',
        },
        textArea: {
            fontSize: '14px',
        },
    },
};
