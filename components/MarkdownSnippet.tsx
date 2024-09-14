import { Input, Space, Typography, Divider, Slider, Form, Radio, Tabs, Tooltip } from 'antd';
import React, { useState } from 'react';
import * as Constants from '../utils/Constants';

const { Title, Text } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

interface Props {
    username?: string;
}

export default function MarkdownSnippet(props: Props): JSX.Element | null {
    const { username } = props;
    const [width, setWidth] = useState<number>(400); // Varsayılan genişlik
    const [count, setCount] = useState<number>(5); // Varsayılan özel sayı
    const [unique, setUnique] = useState<string>('false'); // Varsayılan benzersiz parça
    const [activeTab, setActiveTab] = useState<string>('markdown'); // Aktif sekme (markdown veya html)

    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const customMarkdownCode = `![Spotify Son Oynatılan Parçalar by mdusova](${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''})`;

    const htmlCode = `
        <img src="${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}" alt="Spotify Son Oynatılan Parçalar by mdusova" style="border-radius: 8px;" />
    `;

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
        <Space className="container" direction="vertical" size="large">
            <Title level={4} style={{ color: '#333' }}>
                {username} olarak giriş yapıldı.
            </Title>
            <Divider />

            <Tabs defaultActiveKey="markdown" onChange={(key) => setActiveTab(key)} style={{ marginBottom: 20 }}>
                <TabPane tab="Markdown" key="markdown">
                    <div className="section">
                        <Title level={5}>Markdown Kodunuz:</Title>
                        <TextArea
                            className="markdown"
                            autoSize
                            readOnly
                            value={`Özel genişlik, özel sayı ve benzersiz parça ayarları:\n\n${customMarkdownCode}`}
                            style={{ width: '100%', maxWidth: '600px' }} // Sabit genişlik
                        />
                    </div>
                </TabPane>
                <TabPane tab="HTML" key="html">
                    <div className="section">
                        <Title level={5}>HTML Kodunuz:</Title>
                        <TextArea
                            className="html-code"
                            autoSize
                            readOnly
                            value={htmlCode}
                            style={{ width: '100%', maxWidth: '600px' }} // Sabit genişlik
                        />
                    </div>
                </TabPane>
                <TabPane tab="Ayarlar" key="settings">
                    <div className="section">
                        <Title level={5}>Ayarlar:</Title>
                        <div className="section">
                            <Text>
                                Özel sayı için:
                                <b>
                                    {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                                </b>
                            </Text>
                            <Form.Item label="Sayı" style={{ marginBottom: 0 }}>
                                <Tooltip title={`Sayı: ${count}`} overlayStyle={{ fontSize: '14px', color: '#000' }}>
                                    <div className="slider-container">
                                        <Slider
                                            min={1}
                                            max={10}
                                            step={1}
                                            value={count}
                                            onChange={handleCountChange}
                                        />
                                    </div>
                                </Tooltip>
                            </Form.Item>
                        </div>
                        <div className="section">
                            <Text>
                                Özel genişlik için:
                                <b>
                                    {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                                </b>
                            </Text>
                            <Form.Item label="Genişlik (px)" style={{ marginBottom: 0 }}>
                                <Tooltip title={`Genişlik: ${width}px`} overlayStyle={{ fontSize: '14px', color: '#000' }}>
                                    <div className="slider-container">
                                        <Slider
                                            min={Constants.minWidth}
                                            max={800} // Maksimum genişlik 800px olarak ayarlandı
                                            step={10}
                                            value={width}
                                            onChange={handleWidthChange}
                                        />
                                    </div>
                                </Tooltip>
                            </Form.Item>
                        </div>
                        <div className="section">
                            <Text>Benzersiz parçalar için:</Text>
                            <Radio.Group onChange={handleUniqueChange} value={unique} style={{ marginBottom: 20 }}>
                                <Radio value="true">Evet</Radio>
                                <Radio value="false">Hayır</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </TabPane>
            </Tabs>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <img
                    src={`${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}`}
                    alt="Spotify Son Oynatılan Parçalar by mdusova"
                    style={{ width: '100%', maxHeight: '400px', borderRadius: '8px' }}
                />
            </div>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    background: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .section {
                    margin-bottom: 20px;
                }

                .markdown, .html-code {
                    background: #f5f5f5;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    padding: 8px;
                    font-family: monospace;
                    margin-top: 10px;
                }

                .image-preview {
                    text-align: center;
                    background: transparent;
                    padding: 0;
                    margin-top: 20px;
                }

                .image-preview img {
                    border: none;
                    border-radius: 8px;
                }

                .slider-container {
                    width: 100%;
                    max-width: 300px;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .slider-container {
                        max-width: 100%;
                    }

                    .markdown, .html-code {
                        width: 100%;
                    }
                }
            `}</style>
        </Space>
    );
}
