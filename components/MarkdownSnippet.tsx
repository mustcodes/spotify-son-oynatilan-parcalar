import { Input, Space, Typography, Slider, Form, Tabs } from 'antd';
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
    const markdownCode = `![Alt text](${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''})`;
    const htmlCode = `
        <img src="${svgSrc}&width=${width}&count=${count}${unique === 'true' ? '&unique=true' : ''}" alt="Preview" style="width: 100%; max-height: 400px; border-radius: 8px;" />
    `;

    return (
        <Tabs defaultActiveKey="1" activeKey={activeTab} onChange={setActiveTab}>
            <TabPane tab="Markdown" key="1">
                <Space className="vert-space" direction="vertical" size="small">
                    <Title level={5}>{username} olarak giriş yapıldı.</Title>
                    <Text>Markdown kod parçacığı:</Text>
                    <TextArea className="markdown" autoSize readOnly value={markdownCode} />
                </Space>
            </TabPane>
            <TabPane tab="HTML" key="2">
                <Space className="vert-space" direction="vertical" size="small">
                    <Title level={5}>{username} olarak giriş yapıldı.</Title>
                    <Text>HTML kod parçacığı:</Text>
                    <TextArea className="html" autoSize readOnly value={htmlCode} />
                </Space>
            </TabPane>
            <TabPane tab="Ayarlar" key="3">
                <Space direction="vertical" size="small">
                    <Title level={5}>Ayarlar</Title>
                    
                    <Text>Özel sayı:</Text>
                    <Slider
                        min={Constants.minCount}
                        max={Constants.maxCount}
                        step={1}
                        value={count}
                        onChange={handleCountChange}
                        tooltip={{ formatter: (value) => `Sayı: ${value}` }}
                    />
                    
                    <Text>Özel genişlik:</Text>
                    <Slider
                        min={Constants.minWidth}
                        max={Constants.maxWidth}
                        step={10}
                        value={width}
                        onChange={handleWidthChange}
                        tooltip={{ formatter: (value) => `Genişlik: ${value}px` }}
                    />
                    
                    <Text>Benzersiz parçalar için:</Text>
                    <Form.Item>
                        <Form.Item name="unique" valuePropName="checked" noStyle>
                            <Checkbox
                                checked={unique === 'true'}
                                onChange={(e) => setUnique(e.target.checked ? 'true' : 'false')}
                            >
                                Evet
                            </Checkbox>
                        </Form.Item>
                        <Form.Item name="unique" valuePropName="checked" noStyle>
                            <Checkbox
                                checked={unique === 'false'}
                                onChange={(e) => setUnique(e.target.checked ? 'false' : 'true')}
                            >
                                Hayır
                            </Checkbox>
                        </Form.Item>
                    </Form.Item>
                </Space>
            </TabPane>
        </Tabs>
    );
}
