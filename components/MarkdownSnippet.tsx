import { Input, Space, Typography, Divider, Slider, Form, Radio, Button } from 'antd';
import React, { useState } from 'react';
import * as Constants from '../utils/Constants';

const { Text, Title } = Typography;
const { TextArea } = Input;

interface Props {
    username?: string;
}

export default function MarkdownSnippet(props: Props): JSX.Element | null {
    const { username } = props;
    const [width, setWidth] = useState<number>(400); // Varsayılan genişlik
    const [count, setCount] = useState<number>(5); // Varsayılan özel sayı
    const [unique, setUnique] = useState<string>('false'); // Varsayılan benzersiz parça

    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc})`;
    const customMarkdownCode = `![Alt text](${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''})`;

    const handleWidthChange = (value: number) => {
        setWidth(value);
    };

    const handleCountChange = (value: number) => {
        setCount(value);
    };

    const handleUniqueChange = (e: any) => {
        setUnique(e.target.value);
    };

    return (
        <div className="container">
            <Title level={4} style={{ color: '#1DB954' }}>
                {username} olarak giriş yapıldı.
            </Title>
            <Divider />

            <Space className="form-section" direction="vertical" size="large">
                <div className="form-item">
                    <Title level={5}>Markdown kod parçacığı:</Title>
                    <TextArea className="markdown" autoSize readOnly value={markdownCode} />
                </div>

                <div className="form-item">
                    <Text>
                        Özel sayı için:
                        <b>
                            {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                        </b>
                    </Text>
                    <Form.Item label="Sayı" style={{ marginBottom: 0 }}>
                        <Slider
                            min={1}
                            max={10}
                            step={1}
                            value={count}
                            onChange={handleCountChange}
                            tooltipVisible
                            tooltipPlacement="top"
                            style={{ marginBottom: 20 }}
                        />
                        <TextArea className="markdown" autoSize readOnly value={`![Alt text](${svgSrc}&count=${count})`} />
                    </Form.Item>
                </div>

                <div className="form-item">
                    <Text>
                        Özel genişlik için:
                        <b>
                            {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                        </b>
                    </Text>
                    <Form.Item label="Genişlik (px)" style={{ marginBottom: 0 }}>
                        <Slider
                            min={Constants.minWidth}
                            max={Constants.maxWidth}
                            step={10}
                            value={width}
                            onChange={handleWidthChange}
                            tooltipVisible
                            tooltipPlacement="top"
                            style={{ marginBottom: 20 }}
                        />
                        <TextArea className="markdown" autoSize readOnly value={`![Alt text](${svgSrc}&width=${width})`} />
                    </Form.Item>
                </div>

                <div className="form-item">
                    <Text>Benzersiz parçalar için:</Text>
                    <Radio.Group onChange={handleUniqueChange} value={unique} style={{ marginBottom: 20 }}>
                        <Radio value="true">Evet</Radio>
                        <Radio value="false">Hayır</Radio>
                    </Radio.Group>
                    <TextArea className="markdown" autoSize readOnly value={`![Alt text](${svgSrc}${unique === 'true' ? '&unique=true' : ''})`} />
                </div>
            </Space>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <img
                    src={`${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}`}
                    alt="Preview"
                    style={{ width: '100%', maxHeight: '400px', borderRadius: '8px' }}
                />
            </div>

            <div className="markdown-preview">
                <Title level={5}>Markdown Kodunuz:</Title>
                <TextArea
                    className="markdown"
                    autoSize
                    readOnly
                    value={`Özel genişlik, özel sayı ve benzersiz parça ayarları:\n\n${customMarkdownCode}`}
                />
            </div>

            <div className="actions">
                <Button type="primary">Yeniden Yetkilendir</Button>
                <Button type="link" danger>Yerel kimlik bilgilerini temizle</Button>
            </div>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }

                .form-section {
                    margin-bottom: 20px;
                }

                .form-item {
                    margin-bottom: 20px;
                    text-align: left;
                }

                .markdown {
                    background: #f5f5f5;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    padding: 8px;
                    font-family: monospace;
                }

                .image-preview {
                    margin-bottom: 20px;
                }

                .markdown-preview {
                    margin-bottom: 20px;
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    gap: 10px;
                }

                .actions .ant-btn {
                    margin: 0 10px;
                }
            `}</style>
        </div>
    );
}
