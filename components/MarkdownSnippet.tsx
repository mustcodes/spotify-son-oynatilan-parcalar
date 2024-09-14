import { Input, Space, Typography, Divider, Slider, Form, Button } from 'antd';
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
    const [customWidthMarkdown, setCustomWidthMarkdown] = useState<string>(`![Alt text](${Constants.BaseUrl}/api?user=${username}&width=400)`);

    if (!username) {
        return null;
    }

    const svgSrc = `${Constants.BaseUrl}/api?user=${username}`;
    const markdownCode = `![Alt text](${svgSrc})`;
    const customCount = `![Alt text](${svgSrc}&count={count})`;
    const uniqueTracks = `![Alt text](${svgSrc}&unique={true|1|on|yes})`;
    const customWidthCode = `![Alt text](${svgSrc}&width=${width})`;

    const handleWidthChange = (value: number) => {
        setWidth(value);
        setCustomWidthMarkdown(`![Alt text](${svgSrc}&width=${value})`);
    };

    return (
        <Space className="container" direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={4} style={{ color: '#1DB954' }}>
                {username} olarak giriş yapıldı.
            </Title>
            <Divider />

            <div className="section">
                <Title level={5}>Markdown kod parçacığı:</Title>
                <TextArea className="markdown" autoSize readOnly value={markdownCode} />
            </div>

            <div className="section">
                <Text>
                    Özel sayı için (
                    <b>
                        {Constants.minCount} &#8804; &#123;Sayı&#125; &#8804; {Constants.maxCount}
                    </b>
                    ):
                </Text>
                <TextArea className="markdown" autoSize readOnly value={customCount} />
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
                    <TextArea className="markdown" autoSize readOnly value={customWidthMarkdown} />
                </Form.Item>
            </div>

            <div className="section">
                <Text>Benzersiz parçalar için:</Text>
                <TextArea className="markdown" autoSize readOnly value={uniqueTracks} />
            </div>

            <div className="image-preview">
                <Title level={5}>Önizleme:</Title>
                <object type="image/svg+xml" data={svgSrc} style={{ width: '100%', maxHeight: '400px', borderRadius: '8px' }}></object>
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

                .markdown {
                    background: #f5f5f5;
                    border: 1px solid #d9d9d9;
                    border-radius: 4px;
                    padding: 8px;
                    font-family: monospace;
                }

                .image-preview {
                    text-align: center;
                }

                .image-preview object {
                    border-radius: 8px;
                    border: 1px solid #d9d9d9;
                }
            `}</style>
        </Space>
    );
}
