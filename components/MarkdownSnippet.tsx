import { Input, Space, Typography, Divider, Slider, Form, Radio, Tabs } from 'antd';
import React, { useState } from 'react';
import * as Constants from '../utils/Constants';

const { Text, Title } = Typography;
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
    const markdownCode = `![Alt text](${svgSrc})`;
    const customMarkdownCode = `![Alt text](${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''})`;

    const markdownCountCode = `![Alt text](${svgSrc}&count=${count})`;
    const markdownWidthCode = `![Alt text](${svgSrc}&width=${width})`;
    const markdownUniqueCode = `![Alt text](${svgSrc}${unique === 'true' ? '&unique=true' : ''})`;

    const htmlCode = `
        <img src="${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}" alt="Preview" style="width: 100%; max-height: 400px; border-radius: 8px;" />
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
        <Space className="container" direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={4} style={{ color: '#1DB954' }}>
                {username} olarak giriş yapıldı.
            </Title>
            <Divider />

            <Tabs defaultActiveKey="markdown" onChange={(key) => setActiveTab(key)} style={{ marginBottom: 20 }}>
                <TabPane tab="Markdown" key="markdown">
                    <div className="section">
                        <Title level={5}>Markdown kod parçacığı:</Title>
                        <TextArea className="markdown" autoSize readOnly value={markdownCode} />
                        <div className="section">
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
                            </Form.Item>
                            <TextArea className="markdown" autoSize readOnly value={markdownCountCode} />
                        </div>

                        <div className="section">
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
                            </Form.Item>
                            <TextArea className="markdown" autoSize readOnly value={markdownWidthCode} />
                        </div>

                        <div className="section">
                            <Text>Benzersiz parçalar için:</Text>
                            <Radio.Group onChange={handleUniqueChange} value={unique} style={{ marginBottom: 20 }}>
                                <Radio value="true">Evet</Radio>
                                <Radio value="false">Hayır</Radio>
                            </Radio.Group>
                            <TextArea className="markdown" autoSize readOnly value={markdownUniqueCode} />
                        </div>

                        <div className="section">
                            <Title level={5}>Markdown Kodunuz:</Title>
                            <TextArea
                                className="markdown"
                                autoSize
                                readOnly
                                value={`Özel genişlik, özel sayı ve benzersiz parça ayarları:\n\n${customMarkdownCode}`}
                            />
                        </div>
                    </div>
                </TabPane>
                <TabPane tab="HTML" key="html">
                    <div className="section">
                        <Title level={5}>HTML kod parçacığı:</Title>
                        <TextArea className="html-code" autoSize readOnly value={htmlCode} />
                        <div className="section">
                            <Text>
                                Özel sayı için:
                                <b>
                                    {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                                </b>
                            </Text>
                            <TextArea className="html-code" autoSize readOnly value={`<img src="${svgSrc}&count=${count}" alt="Preview" />`} />
                        </div>

                        <div className="section">
                            <Text>
                                Özel genişlik için:
                                <b>
                                    {Constants.minWidth} &#8804; &#123;Genişlik&#125; &#8804; {Constants.maxWidth}
                                </b>
                            </Text>
                            <TextArea className="html-code" autoSize readOnly value={`<img src="${svgSrc}&width=${width}" alt="Preview" />`} />
                        </div>

                        <div className="section">
                            <Text>Benzersiz parçalar için:</Text>
                            <TextArea className="html-code" autoSize readOnly value={`<img src="${svgSrc}${unique === 'true' ? '&unique=true' : ''}" alt="Preview" />`} />
                        </div>
                    </div>
                </TabPane>
            </Tabs>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <img
                    src={`${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}`}
                    alt="Preview"
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
                }

                .image-preview img {
                    border-radius: 8px;
                    border: 1px solid #d9d9d9;
                }
            `}</style>
        </Space>
    );
}
