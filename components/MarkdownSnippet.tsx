import { Input, Space, Typography, Tabs, Switch, Slider } from 'antd';
import React, { useState, useEffect } from 'react';
import * as Constants from '../utils/Constants';

const { Text, Title } = Typography;
const { TextArea } = Input;
const { TabPane } = Tabs;

interface Props {
    username?: string;
}

export default function MarkdownSnippet(props: Props): JSX.Element | null {
    const { username } = props;
    const [count, setCount] = useState<number>(5); // Varsayılan değerler
    const [width, setWidth] = useState<number>(400); // Varsayılan değerler
    const [unique, setUnique] = useState<boolean>(false); // Varsayılan değerler

    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc})`;
    const customCount = `![Alt text](${svgSrc}&count=${count})`;
    const customWidth = `![Alt text](${svgSrc}&width=${width})`;
    const uniqueTracks = `![Alt text](${svgSrc}&unique=${unique ? 'true' : 'false'})`;

    return (
        <Tabs defaultActiveKey="1">
            <TabPane tab="Markdown" key="1">
                <Space className="vert-space" direction="vertical" size="small">
                    <Title level={5}>{username} olarak giriş yapıldı.</Title>
                    <Text>Markdown kod parçacığı:</Text>
                    <TextArea className="markdown" autoSize readOnly value={markdownCode} />
                    <Text>Özel sayı için:</Text>
                    <TextArea className="markdown" autoSize readOnly value={customCount} />
                    <Text>Özel genişlik için:</Text>
                    <TextArea className="markdown" autoSize readOnly value={customWidth} />
                    <Text>Benzersiz parçalar için:</Text>
                    <TextArea className="markdown" autoSize readOnly value={uniqueTracks} />
                    <object type="image/svg+xml" data={svgSrc}></object>
                </Space>
            </TabPane>
            <TabPane tab="Ayarlar" key="2">
                <Space direction="vertical" size="small">
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
                    <Switch
                        checked={unique}
                        onChange={(checked) => setUnique(checked)}
                        checkedChildren="Evet"
                        unCheckedChildren="Hayır"
                    />
                </Space>
            </TabPane>
        </Tabs>
    );
}
