import { Input, Space, Typography, Slider, Form, Checkbox, Tabs } from 'antd';
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
    const [unique, setUnique] = useState<boolean>(false); // Varsayılan benzersiz parça

    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc}&width=${width}&count=${count}${unique ? '&unique=true' : ''})`;
    const htmlCode = `
        <img src="${svgSrc}&width=${width}&count=${count}${unique ? '&unique=true' : ''}" alt="Preview" style="width: 100%; max-height: 400px; border-radius: 8px;" />
    `;

    return (
        <Space className="container" direction="vertical" size="large">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Markdown" key="1">
                    <div className="section">
                        <Text>Markdown kod parçacığı:</Text>
                        <TextArea className="markdown" autoSize readOnly value={markdownCode} />
                    </div>
                </TabPane>
                <TabPane tab="HTML" key="2">
                    <div className="section">
                        <Text>HTML kod parçacığı:</Text>
                        <TextArea className="html-code" autoSize readOnly value={htmlCode} />
                    </div>
                </TabPane>
                <TabPane tab="Ayarlar" key="3">
                    <div className="section">
                        <Title level={5}>Ayarlar</Title>
                        <Text>Özel sayı:</Text>
                        <Slider
                            min={Constants.minCount}
                            max={Constants.maxCount}
                            step={1}
                            value={count}
                            onChange={(value) => setCount(value as number)}
                            tooltip={{ formatter: (value) => `Sayı: ${value}` }}
                        />
                        
                        <Text>Özel genişlik:</Text>
                        <Slider
                            min={Constants.minWidth}
                            max={Constants.maxWidth}
                            step={10}
                            value={width}
                            onChange={(value) => setWidth(value as number)}
                            tooltip={{ formatter: (value) => `Genişlik: ${value}px` }}
                        />
                        
                        <Text>Benzersiz parçalar için:</Text>
                        <Checkbox
                            checked={unique}
                            onChange={(e) => setUnique(e.target.checked)}
                        >
                            Benzersiz
                        </Checkbox>
                    </div>
                </TabPane>
            </Tabs>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <img
                    src={`${svgSrc}&width=${width}&count=${count}${unique ? '&unique=true' : ''}`}
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
